import React from 'react'

import getData from '../../utils/getData';

import Morning from '../../Hours/Morning';
import Noon from '../../Hours/Noon';
import Night from '../../Hours/Night';
import AfterNoon from '../../Hours/AfterNoon';

const Colombia = ( props ) => {
    
    const [ data, setData ] = React.useState({})
    const [ hour, setHour ] = React.useState(0)
    const [ response, setResponse ] = React.useState(false)

    let date = null;

    React.useEffect( () => {

        const callbackData = async () => {
            if( response === false ) {
                date = new Date()
                let utc = 0;
                let min = 0;

                let tempHour = date.getHours() + utc;
                let tempMin = date.getMinutes() + min;

                date.setHours( tempHour );
                date.setMinutes( tempMin );
                setHour(date.getHours())

                let awaitData = await getData("colombia")
                awaitData.date = date;
                awaitData.country = "colombia";
                
                setData( awaitData)    
                setResponse(true)
            }
        }

        callbackData();

    }, [data])


    return(
        <>
        <section className="Countries">

            {
                response ? 
                    hour >= 6 && hour <= 12 ? <Morning data = { data } />
                    : hour > 12 && hour <= 15 ? <Noon data = { data } />
                    : hour > 15 && hour <= 18 ? <AfterNoon data = { data } />
                    : <Night data = { data } />
                    
                :
                <div className="Countries__loading">
                    <div className="loader" />
                    <div>Estamos cargando todos los datos de Colombia</div>
                </div>
            }
        </section>
        
        </>
    )
}

export default Colombia;