import React from 'react'
import './index.scss';

import getData from '../../utils/getData';

import Morning from '../../Hours/Morning';
import Noon from '../../Hours/Noon';
import Night from '../../Hours/Night';
import AfterNoon from '../../Hours/AfterNoon';

const Countries = ( props ) => {
    
    const [ data, setData ] = React.useState({})
    const [ hour, setHour ] = React.useState(0)
    const [ response, setResponse ] = React.useState(false)

    let date = null;

    React.useEffect( () => {

        const callbackData = async () => {
            if( response === false ) {
                date = new Date()
                let countryName = "";
                let utc = 0;
                let min = 0;
                
                if ( props.quality === 'colombia' ) {
                    utc = 0;
                    min = 0;
                    countryName = 'colombia'
                    
                } else if ( props.quality === 'healt') {
                    utc = 11;
                    min = 0;
                    countryName = "kyrgyzstan"
                    
                } else if ( props.quality === 'sick') {
                    utc = 11;
                    min = 30;
                    countryName = "india"
                }

                let tempHour = date.getHours() + utc;
                let tempMin = date.getMinutes() + min

                date.setHours( tempHour );
                date.setMinutes( tempMin );
                setHour(date.getHours())

                let awaitData = await getData(countryName)
                awaitData.date = date;
                awaitData.country = countryName;
                
                
                setData( awaitData)
                
                console.log(date, utc, "horar" + hour)
    
                setResponse(true)
            }
        }

        callbackData();

    }, [props, data])


    return(
        <section className="Countries">

            {
                response ? 
                    hour >= 6 && hour <= 12 ? <Morning data = { data } />
                    : hour > 12 && hour <= 15 ? <Noon data = { data } />
                    : hour > 15 && hour <= 19 ? <AfterNoon data = { data } />
                    : <Night data = { data } />
                    
                :
                <div>Cargando</div>
            }
        </section>
    )
}

export default Countries;