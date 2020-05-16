import React from 'react'
import DataCard from '../../Components/DataCard';

const images = [
    "/img/hours/Night/Bueno.svg",
    "/img/hours/Night/Moderado.svg",
    "/img/hours/Night/NoSaludable.svg",
    "/img/hours/Night/Insalubre.svg",
    "/img/hours/Night/Nadasaludable.svg",
    "/img/hours/Night/Peligroso.svg",
]

const Night = ( props ) => {
    
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
        console.log(props, "Ninght")

    },[props])

    return(
        <section className="Night">
            <div className="Night__background" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + background + ")" }}/>
            
            <div className="CountryCard">
                <DataCard data = { props.data } />
            </div>
            
        </section>
    )
}

export default Night;