import React from 'react'
import './index.scss'

import { Link } from 'react-router-dom'
import * as Routes from '../assets/js/Routes'

import Progress from './Contador'
import Uno from './Steps/Uno'
import Dos from './Steps/Dos'
import Tres from './Steps/Tres'
import Cuatro from './Steps/Cuatro'
import Cinco from './Steps/Cinco'
import Seis from './Steps/Seis'
import Siete from './Steps/Siete'
import Ocho from './Steps/Ocho'
import Nueve from './Steps/Nueve'
import Diez from './Steps/Diez'
import Once from './Steps/Once'

const Huella = () => {

    const [ step, setStep ] = React.useState(1)

    //Fruta
    const [ fruta, setFruta ] = React.useState(0)
    const [ pan, setPan ] = React.useState(0)
    const [ verdura, setVerdura ] = React.useState(0)
    const [ tortilla, setTortilla ] = React.useState(0)

    //Res
    const [ res, setRes ] = React.useState(0);
    const [ pollo, setPollo ] = React.useState(0)
    const [ cerdo, setCerdo ] = React.useState(0)
    const [ pescado, setPescado ] = React.useState(0)

    //Lacteos
    const [ yogurth, setYogurt ] = React.useState(0)
    const [ leche, setLeche ] = React.useState(0)

    //Semana Prmedio
    const [ promedio, setPromedio ] = React.useState(0)

    //Bebidas
    const [ gaseosa, setGaseosa ] = React.useState(0)
    const [ agua, setAgua ] = React.useState(0)
    const [ cerveza, setCerveza ] = React.useState(0)
    const [ cigarrillos, setCigarrillos ] = React.useState(0)

    //Transporte
    const [ MIO, setMIO ] = React.useState(0)
    const [ avion, setAvion ] = React.useState(0)
    const [ auto, setAuto ] = React.useState(0)
    const [ kmAuto, setKmAuto ] = React.useState(0)

    //Energia
    const [ electrodomesticos, setElectrodomesticos ] = React.useState(0)
    const [ convencionales, setConvencionales ] = React.useState(0)
    const [ ahorradores, setAhorradores ] = React.useState(0)
    const [ personas, setPersonas ] = React.useState(1)
    const [ celulares, setCelulares ] = React.useState(0)
    const [ encendidos, setEncendidos ] = React.useState(0)
    const [ calentador, setCalentador ] = React.useState(0)
    const [ bano, setBano ] = React.useState(149)
    const [ dientes, setDientes ] = React.useState(1)
    const [ wc, setWc ] = React.useState(0)

    /* RESTAR 470 PUNTOS DEL METRO */

    const [ huella, setHuella ] = React.useState({})

    const onChangeNext = () => {
        setStep( step + 1 )
        onChangeSumatoria()
    }

    const onChangeBack = () => {
        if( step > 1 ){
            setStep( step - 1 )
        }
    }

    let resultado = {}
    const onChangeSumatoria = () => {
        let alimentos = fruta + pan + verdura + tortilla + res + pollo + cerdo + pescado + yogurth + leche + promedio + gaseosa + agua + cerveza + cigarrillos;
        let transporte = MIO + avion + auto + kmAuto;
        let energia = ( ( electrodomesticos + convencionales + ahorradores ) / personas ) + celulares + encendidos + calentador + bano + dientes + wc;
        let total = alimentos + transporte + energia;

        if( total < 15379 ){
            resultado.limites = "Vives dentro de los límites del planeta. ¡Bien Hecho!"
            resultado.consumo = "0.1 hag - 1.6 hag"
            resultado.campos = "Menos de 2 campos de fútbol"
            resultado.planeta = "0.04 - 1 planeta"
        }

        if( total >= 15379  && total < 31379){
            resultado.limites = "Tu imapacto ambiental individual está por encima del umbral de sostenibilidadl del Planeta"
            resultado.consumo = "1.6 hag - 3.2 hag"
            resultado.campos = "2 - 3 campos de fútbol"
            resultado.planeta = "1 - 2 planetas"
        }

        if( total >= 31379 ){
            resultado.limites = "Tu ritmo de vida es completamente insostenible"
            resultado.consumo = "Mayor a 3.2 hag"
            resultado.campos = "Más de 3 campos de fútbol"
            resultado.planeta = "Más de 2 planetas"
        }

        resultado.puntaje = total

        setHuella(resultado);        
    }

    const onReset = () => {
        setStep(1);
        setFruta(0)
        setVerdura(0)
        setTortilla(0)
        
        setRes(0)
        setPollo(0)
        setCerdo(0)
        setPescado(0)

        setYogurt(0)
        setLeche(0)

        setPromedio(0)
    
        setGaseosa(0)
        setAgua(0)
        setCerveza(0)
        setCigarrillos(0)

        setMIO(0)
        setAvion(0)
        setAuto(0)
        setKmAuto(0)

        setElectrodomesticos(0)
        setConvencionales(0)
        setAhorradores(0)
        setPersonas(1)
        setCelulares(0)
        setEncendidos(0)
        setCalentador(0)
        setBano(149)
        setDientes(1)
        setWc(0)
    }
    
    return(
        <section className="Huella" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL  + "/img/Prueba/Background.svg)" }}>
            <Progress steps={ step } stepsTotal={ 11 }/>

            <article className="Huella__body">

                {
                    step === 1 ?
                        <Uno fruta = { setFruta } pan = { setPan } verdura = { setVerdura } tortilla = { setTortilla } />
                    : step === 2 ? 
                        <Dos res = { setRes } pollo = { setPollo } cerdo = { setCerdo } pescado = { setPescado } /> 
                    : step === 3 ? 
                        <Tres yogurt = { setYogurt} leche = { setLeche } />
                    : step === 4 ?
                        <Cuatro promedio = { setPromedio } /> 
                    : step === 5 ?
                        <Cinco gaseosa = { setGaseosa } cerveza = { setCerveza } agua = { setAgua } cigarrillos = { setCigarrillos } />
                    : step === 6 ?
                        <Seis transporte = { setMIO } avion = { setAvion } />
                    : step === 7 ?
                       <Siete auto = { setAuto } autoKm = { setKmAuto } />
                    : step === 8 ?
                        <Ocho electro = { setElectrodomesticos } />
                    : step === 9 ?
                        <Nueve conven = { setConvencionales } ahorra = { setAhorradores } personas = { setPersonas } celu = { setCelulares }/>
                    : step === 10 ?
                        <Diez encendidos = { setEncendidos }/>
                    : step === 11 ?
                        <Once calentador = { setCalentador } bano = { setBano } dientes = { setDientes } wc = { setWc } />
                    : step === 12 ?
                    <article className="results">

                        <div className="results__title">
                            <h4> { huella.limites } </h4>
                        </div>

                        <div className="results__planeta">
                            <p>Si todas las personas consumieramos como tú, necesitariamos:</p>
                            <h1>{ huella.planeta }</h1>
                        </div>

                        <div className="results__consumo">
                            <p>Para satisfacer tu patrón de consumo requieres entre </p>
                            <h1>{ huella.consumo}</h1>
                            <p className="results__consumo__subtitle">hag: Hectáreas globales</p>
                        </div>

                        <div className="results__futbol">
                            <p>Estas hectáreas globales se ven pueden ver traducidas en  <br />campos de futbol,por lo cual necesitarias:</p>
                            <h1>{ huella.campos }</h1>
                        </div>

                    </article>
                    : ''

                }
            </article>

            <div className="Huella__btns">
                {
                    step > 1 && step < 12 &&
                    <button className="Huella__btns__item" onClick={ onChangeBack } > Atrás </button>
                }
                {
                    step < 11 &&
                    <button className="Huella__btns__item" onClick={ onChangeNext } > Siguiente </button>
                }
                {
                    step === 11 &&
                    <button className="Huella__btns__item" onClick={ onChangeNext } > Ver resultados </button>
                }

                { step === 12 &&
                    <div className="huella__btns__final">
                        <button className="huella__btns__final__item" onClick={onReset}> Volver a tomar el test de la huella verde</button>
                        <Link to={ Routes.HOME }>Volver al inicio</Link>
                    </div>
                    
                }
                
            </div>


        </section>
    )

}

export default Huella;