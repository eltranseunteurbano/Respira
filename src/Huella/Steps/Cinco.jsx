import React from 'react'

const Cinco = ( props ) => {
    
    const [ gaseosaDesc, setGaseosaDesc ] = React.useState("No tomo gaseosa")
    const [ aguaDesc, setAguaDesc ] = React.useState("No tomo agua embotellada")
    const [ cigarrillosDesc, setCigarrillosDesc ] = React.useState("No fumo")
    const [ cervezaDes, setCervezaDes ] = React.useState("No tomo agua cerveza")

    const onChangeGaseosa = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            props.gaseosa(1);
            setGaseosaDesc("1 a 2 veces por la semana")

        } else if ( value === 2 ) {
            props.gaseosa(2);
            setGaseosaDesc("2 a 4 veces a la semana")

        } else if ( value === 3 ) {
            props.gaseosa(4);
            setGaseosaDesc("4 a 6 veces a la semana")

        } else if ( value === 4 ) {
            props.gaseosa(5);
            setGaseosaDesc("6 a 8 veces a la semana")

        } else if ( value === 5 ) {
            props.gaseosa(7);
            setGaseosaDesc("8 a 10 veces a la semana")

        } else if ( value === 0 ) {
            props.gaseosa(0);
            setGaseosaDesc("No tomo gaseosa")
        } 

    }

    const onChangeAgua = ( value ) => { 
        value = parseInt(value)

        if( value === 1 ){
            props.agua(4);
            setAguaDesc("1 a 2 litros a la semana")

        } else if ( value === 2 ) {
            props.agua(10);
            setAguaDesc("2 a 4 litros a la semana")

        } else if ( value === 3 ) {
            props.agua(14);
            setAguaDesc("4 a 6 litros a la semana")

        } else if ( value === 4 ) {
            props.agua(20);
            setAguaDesc("6 a 8 litros a la semana")

        } else if ( value === 5 ) {
            props.agua(25);
            setAguaDesc("8 a 10 litros a la semana")

        } else if ( value === 0 ) {
            props.agua(0);
            setAguaDesc("No tomo agua embotellada")
        }
    }

    const onChangeCerveza = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            props.cerveza(40);
            setCervezaDes("1 a 2 cervezas a la semana")

        } else if ( value === 2 ) {
            props.cerveza(79);
            setCervezaDes("2 a 4 cervezas a la semana")

        } else if ( value === 3 ) {
            props.cerveza(131);
            setCervezaDes("4 a 6 cervezas a la semana")

        } else if ( value === 4 ) {
            props.cerveza(186);
            setCervezaDes("6 a 8 cervezas a la semana")

        } else if ( value === 5 ) {
            props.cerveza(239);
            setCervezaDes("8 a 10 cervezas a la semana")

        } else if ( value === 0 ) {
            props.cerveza(0);
            setCervezaDes("No tomo agua cerveza")
        }
    }

    const onChangeCigarrillos = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            props.cigarrillos(3);
            setCigarrillosDesc("1 al día")

        } else if ( value === 2 ) {
            props.cigarrillos(10);
            setCigarrillosDesc("Entre 2 y 5")

        } else if ( value === 3 ) {
            props.cigarrillos(24);
            setCigarrillosDesc("Entre 6 y 10")

        } else if ( value === 4 ) {
            props.cigarrillos(37);
            setCigarrillosDesc("Entre 11 y 15")

        } else if ( value === 5 ) {
            props.cigarrillos(52);
            setCigarrillosDesc("Entre 16 y 20")

        } else if ( value === 0 ) {
            props.cigarrillos(0);
            setCigarrillosDesc("Ninguno")
        }
    }

    return(
        <section className="step"> 
            <div className="step__header">
                <h1 className="step__header__title">COMIDA</h1>
                <h4 className="step__header__question"> ¿Qué tan seguido consumes... </h4>
            </div>

            <div className="step__body">
                
                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuántas veces a la <strong>semana</strong> tomas <strong>gaseosa</strong>?</p>
                    <p className="step__body__item__subtitle">Nota: Considera como base una botella de gaseosas de 355ml</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeGaseosa(event.target.value)} />
                    <p className="step__body__item__desc">{gaseosaDesc}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuántos litros (L) de <strong>agua embotellada</strong> tomas aproximadamente a la <strong>semana</strong>?</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeAgua(event.target.value)} />
                    <p className="step__body__item__desc">{aguaDesc}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuántas veces a la <strong>semana</strong> tomas <strong>cerveza</strong>?</p>
                    <p className="step__body__item__subtitle">Nota: Considera como base una botella de gaseosas de 355ml</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeCerveza(event.target.value)} />
                    <p className="step__body__item__desc">{cervezaDes}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuantos <strong>cigarrillos</strong> fumas al <strong>día</strong>?</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeCigarrillos(event.target.value)} />
                    <p className="step__body__item__desc">{cigarrillosDesc}</p>
                </label>
            </div>

        </section>
    )
}

export default Cinco;