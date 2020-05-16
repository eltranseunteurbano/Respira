import React from 'react'

import DataCard from '../../Components/DataCard';

const images = [
    "/img/hours/AfterNoon/Bueno.svg",
    "/img/hours/AfterNoon/Moderado.svg",
    "/img/hours/AfterNoon/NoSaludable.svg",
    "/img/hours/AfterNoon/Insalubre.svg",
    "/img/hours/AfterNoon/Nadasaludable.svg",
    "/img/hours/AfterNoon/Peligroso.svg",
]

const AfterNoon = ( props ) => {

    const [ background, setBackground ] = React.useState("");
    
    React.useEffect( () => {

        const onChangeAQI = ( aqi ) => {
            if( aqi > 0 && aqi <= 50 ) {
                setBackground( images[0] )
    
            } else if( aqi > 50 && aqi <= 100 ) {
                setBackground ( images[1] )
    
            } else if ( aqi > 100 && aqi <= 150 ) {
                setBackground ( images[2] )
    
            } else if( aqi > 150 && aqi <= 200 ) {
                setBackground ( images[3] )
    
            } else if ( aqi > 200 && aqi <= 300 ) {
                setBackground ( images[4] ) 
    
            } else if ( aqi > 300 ) {
                setBackground ( images[5] )
            }    
        }
        
        onChangeAQI(props.data.aqi)
        console.log(props, "Afternoon")
    },[props])

    return(
        <section className="AfterNoon">
            <div className="AfterNoon__background" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + background + ")" }}/>
            <div className="CountryCard">
                <DataCard data = { props.data } />
            </div>
        </section>
    )
}

export default AfterNoon;