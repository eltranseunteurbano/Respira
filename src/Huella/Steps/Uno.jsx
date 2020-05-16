import React from 'react';
import InputRange from 'react-input-range'

const Uno = ( props ) => {

    const [ frutaDesc, setFrutaDesc ] = React.useState("No consumo fruta")
    const [ vegatalesDes, setVegatalesDes ] = React.useState("No consumo vegetales")
    const [ panDesc, setPanDesc ] = React.useState("No consumo pan")
    const [ tortillaDesc, setTortillaDesc ] = React.useState("No consumo tortillas")

    const onChangeFruta = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            props.fruta(0);
            setFrutaDesc("Menos de una ración a la semana")

        } else if ( value === 2 ) {
            props.fruta(2);
            setFrutaDesc("1 a 2 raciones a la semana")

        } else if ( value === 3 ) {
            props.fruta(4);
            setFrutaDesc("2 a 4 raciones a la semana")

        } else if ( value === 4 ) {
            props.fruta(6);
            setFrutaDesc("4 a 6 raciones a la semana")

        } else if ( value === 5 ) {
            props.fruta(9);
            setFrutaDesc("6 a 8 raciones a la semana")

        } else if ( value === 0 ) {
            props.fruta(0);
            setFrutaDesc("No consumo fruta")
        }

    }

    const onChangeVegetales = ( value ) => { 
        value = parseInt(value)

        if( value === 1 ){
            props.verdura(0);
            setVegatalesDes("Menos de 1 reación a la semana")

        } else if ( value === 2 ) {
            props.verdura(1);
            setVegatalesDes("1 a 2 raciones a la semana")

        } else if ( value === 3 ) {
            props.verdura(2);
            setVegatalesDes("2 a 4 raciones a la semana")

        } else if ( value === 4 ) {
            props.verdura(4);
            setVegatalesDes("4 a 6 raciones a la semana")

        } else if ( value === 5 ) {
            props.verdura(6);
            setVegatalesDes("6 a 8 raciones a la semana")
            
        } else if ( value === 0 ) {
            props.verdura(0);
            setVegatalesDes("No consumo vegetales")
            
        }
    }

    const onChangePan = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            props.pan(27);
            setPanDesc("1 a 2 piezas de pan a la semana")

        } else if ( value === 2 ) {
            props.pan(55);
            setPanDesc("2 a 4 piezas de pan a la semana")

        } else if ( value === 3 ) {
            props.pan(93);
            setPanDesc("4 a 6 piezas de pan a la semana")

        } else if ( value === 4 ) {
            props.pan(131);
            setPanDesc("6 a 8 piezas de pan a la semana")

        } else if ( value === 5 ) {
            props.pan(170);
            setPanDesc("8 a 10 piezas de pan a la semana")
            
        } else if ( value === 0 ) {
            props.pan(0);
            setPanDesc("No consumo pan")
            
        }

    }

    const onChangeTortilla = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            props.tortilla(91);
            setTortillaDesc("1 a 2 piezas de tortilla a la semana")

        } else if ( value === 2 ) {
            props.tortilla(182);
            setTortillaDesc("2 a 4 piezas de tortilla a la semana")

        } else if ( value === 3 ) {
            props.tortilla(295);
            setTortillaDesc("4 a 6 piezas de tortilla a la semana")

        } else if ( value === 4 ) {
            props.tortilla(422);
            setTortillaDesc("6 a 8 piezas de tortilla a la semana")

        } else if ( value === 5 ) {
            props.tortilla(542);
            setTortillaDesc("8 a 10 piezas de tortilla a la semana")

        } else if ( value === 0 ) {
            props.tortilla(0);
            setTortillaDesc("No consumo tortillas")
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
                    <p className="step__body__item__title">¿Cuántas raciones de <strong>fruta</strong> consume a la <strong>semana</strong>?</p>
                    <p className="step__body__item__subtitle">Nota: Considera una ración de <strong>fruta</strong> mixta de 200g</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeFruta(event.target.value)} />
                    <p className="step__body__item__desc">{frutaDesc}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuántas raciones de <strong>verdura</strong> consume a la <strong>semana</strong>?</p>
                    <p className="step__body__item__subtitle">Nota: Considera una ración de <strong>verdura</strong> mixta de 200g</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeVegetales(event.target.value)} />
                    <p className="step__body__item__desc">{vegatalesDes}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuántas piezas de <strong>pan</strong> consumes a la <strong>semana</strong>?</p>
                    <p className="step__body__item__subtitle">Nota: Considera una ración de <strong>fruta</strong> mixta de 200g</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangePan(event.target.value)} />
                    <p className="step__body__item__desc">{panDesc}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuantas piezas de <strong>tortilla</strong> consumes en promedio al <strong>día</strong>?</p>
                    <p className="step__body__item__subtitle">Nota: Considera una ración de <strong>fruta</strong> mixta de 200g</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeTortilla(event.target.value)} />
                    <p className="step__body__item__desc">{tortillaDesc}</p>
                </label>
            </div>

        </section>
    )

}

export default Uno;