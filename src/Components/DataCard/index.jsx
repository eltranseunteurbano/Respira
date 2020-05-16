import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss';

import * as Routes from '../../assets/js/Routes'

const imagesHour = ['/img/hours/morning.svg', '/img/hours/noon.svg', '/img/hours/afternoon.svg', '/img/hours/night.svg'];


const DataCard = ( props ) => {

    const [ AQIvalue, setAQIValue ] = React.useState( {} )
    const [ flagCountry, setFlagCountry ] = React.useState('');
    const [ showCountry, setShowCountry ] = React.useState([true, false, false]);

    const qualityAirData = [
        {
            title: "Bueno",
            description: "El aire es bueno, todo perfecto.",
            background: "#00F600",
            color: "var(--white)"
        },{
            title: "Moderado",
            description: "No es un problema todavia, pero empieza a tener cuidado.",
            background: "#F8FF00",
            color: "var(--black)"
        },{
            title: "No es saludable para grupos sensibles",
            description: "Aquí las personas con problemas respiratorios, niños y ancianos no deberían exponerse por tiempo prolongado al aire.",
            background: "#FF6E00",
            color: "var(--white)"
        },{
            title: "Insalubre",
            description: "Toda la población PUEDE empezar a tener problemas, pero no es común que todos los presenten.",
            background: "#B6079A",
            color: "var(--white)"
        },{
            title: "Muy poco saludable",
            description: "Estado de emergencia. Posibilidad de que todas las personas tengan problemas serios respiratorios.",
            background: "#A30003",
            color: "var(--white)"
        },{
            title: "Peligroso",
            description: "NO SALGAN DE SU CASA. Todos pueden presentar graves problemas respiratorios",
            background: "#7C0002",
            color: "var(--white)"
        }
    ]

    React.useEffect( () => {

    const onChangeFlag = ( country ) => {
        if ( country === 'colombia') {
            setFlagCountry('/img/flags/co.svg')
            setShowCountry([true, false, false])

        } else if ( country === 'kyrgyzstan' ) {
            setFlagCountry('/img/flags/kg.svg')
            setShowCountry([false, true, false])

        } else if ( country === 'india' ) {
            setFlagCountry('/img/flags/in.svg')
            setShowCountry([false, false, true])
        }
    }

    const onChangeAQI = ( aqi ) => {

        if( aqi > 0 && aqi <= 50 ) {
            setAQIValue( qualityAirData[0] )

        } else if( aqi > 50 && aqi <= 100 ) {
            setAQIValue ( qualityAirData[1] )

        } else if ( aqi > 100 && aqi <= 150 ) {
            setAQIValue ( qualityAirData[2] )

        } else if( aqi > 150 && aqi <= 200 ) {
            setAQIValue ( qualityAirData[3] )

        } else if ( aqi > 200 && aqi <= 300 ) {
            setAQIValue ( qualityAirData[4] ) 

        } else if ( aqi > 300 ) {
            setAQIValue ( qualityAirData[5] )
        }    
    }

    onChangeFlag(props.data.country)
    onChangeAQI(props.data.aqi)

    },[props])
    
    let hour = props.data.date.getHours();
    let min = props.data.date.getMinutes()

    let dayTime;

    if( hour >= 6 && hour <= 12 ) {
        dayTime = imagesHour[0]
    } else if ( hour > 12 && hour <= 15 ) {
        dayTime = imagesHour[1]
    } else if ( hour > 15 && hour <= 18 ) {
        dayTime = imagesHour[2]
    } else {
        dayTime = imagesHour[3]
    }

    return(
        <>
        <section className="Datacard">
            <article className="Datacard__body">
                <div className="Datacard__body__flag" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + flagCountry + ")" }}></div>
                
                <div className="Datacard__body__state">

                    <div className="Datacard__body__state__header" style={{ backgroundColor: AQIvalue.background }}>
                        <h1 className="Datacard__body__state__header__value" style={{ color: AQIvalue.color }} >{ AQIvalue.title }: {props.data.aqi} <strong>aqi</strong></h1>
                    </div>

                    <div className="Datacard__body__state__body">
                        <p>{AQIvalue.description}</p>
                    </div>
                
                </div>

                <div className="Datacard__body__hour">
                    <div className="Datacard__body__hour__img">
                        <img src={ process.env.PUBLIC_URL + dayTime } alt="Imange de hora"/>
                    </div>
                        <p className="Datacard__body__hour__text"><strong>Hora</strong><br /> {hour < 10 ? "0" + hour : hour}:{min < 10 ? "0" + min : min}</p>
                </div>

            </article>
            {
                !showCountry[0] &&
                <Link to = { Routes.COLOMBIA } className="Datacard__btn neutro"> Colombia </Link>
            }{
                !showCountry[1] && 
                <Link to = { Routes.SALUDABLE } className="Datacard__btn positive"> País menos contaminado del mundo </Link>

            }{
                !showCountry[2] &&
                <Link to={ Routes.ENFERMO } className="Datacard__btn negative"> País más contaminado del mundo </Link>
            }
            <h1 className="Datacard__message">Tu pantalla no tiene el ancho suficiente para visualizar gráficamente la calidad de aire.</h1>
        </section>
        
        </>
    )

}

export default DataCard;