import React from 'react'
import DataCard from '../../Components/DataCard';

const images = [
    "/img/hours/Noon/Bueno.svg",
    "/img/hours/Noon/Moderado.svg",
    "/img/hours/Noon/NoSaludable.svg",
    "/img/hours/Noon/Insalubre.svg",
    "/img/hours/Noon/Nadasaludable.svg",
    "/img/hours/Noon/Peligroso.svg",
]

const Noon = ( props ) => {
    
    const [ background, setBackground ] = React.useState("");
    
    React.useEffect( () => {

        const onChangeAQI = ( aqi ) => {
            if( aqi > 0 && aqi <= 50 ) {
                setBackground( images[0] )
    
            } else if( aqi > 50 && aqi <= 100 ) {
                setBackground ( images[1] )
    
            } else if ( aqi > 100 && aqi <= 150 ) {
                setBackground ( images[2] )//no funciona
    
            } else if( aqi > 150 && aqi <= 200 ) {
                setBackground ( images[3] )
    
            } else if ( aqi > 200 && aqi <= 300 ) {
                setBackground ( images[4] ) //no funciona
    
            } else if ( aqi > 300 ) {
                setBackground ( images[5] )
            }    
        }
        
        onChangeAQI(props.data.aqi)
    },[props])

    return(
        <section className="Noon">
            <div className="Noon__background" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + background + ")" }}/>
            <div className="CountryCard">
                <DataCard data = { props.data } />
            </div>
            
        </section>
    )
}

export default Noon;