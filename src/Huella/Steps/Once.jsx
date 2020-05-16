import React from 'react'

const Once = ( props ) => {

    const [ calentador, setCalentador ] = React.useState("No tengo calentador");
    const [ bano, setBano ] = React.useState("Solo 5 minutos");
    const [ dientes, setDientes ] = React.useState("Utilizo un vaso de agua para realizar esta actividad");
    const [ wc, setWC ] = React.useState("2 a 3 veces por día")

    const onChangCalentador = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            setCalentador("Electricidad")
            props.calentador(300);

        } else if( value === 2 ){
            setCalentador("Gas natural")
            props.calentador(400);

        } else if( value === 3 ){
            setCalentador("Gas LP")
            props.calentador(500);

        } else if( value === 0 ){
            setCalentador("No tengo calentador")
            props.calentador(0);
        } 
    }

    const onChangeBano = ( value ) => {
        value = parseInt(value)

        if( value === 0 ){
            setBano("Solo 5 minutos")
            props.bano(149);

        } else if( value === 1 ){
            setBano("Entre 5 y 10 minutos")
            props.bano(223);

        } else if( value === 2 ){
            setBano("Entre 10 y 20 minutos")
            props.bano(450);

        } else if( value === 3 ){
            setBano("Más de 20 minutos")
            props.bano(910);

        }
    }

    const onChangeDientes = ( value ) => {
        value = parseInt(value)

        if( value === 0 ){
            setDientes("Utilizo un vaso de agua para realizar esta actividad")
            props.dientes(1);

        } else if( value === 1 ){
            setDientes("Dejo correr el agua mientras lo hago")
            props.dientes(6);

        } 
    }

    const onChangeWC = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            setWC("2 a 3 veces por día")
            props.wc(55);

        } else if( value === 2 ){
            setWC("4 a 6 veces por día")
            props.wc(108);

        } else if( value === 3 ){
            setWC("7 a 9 veces por día")
            props.wc(176);

        } else if( value === 4 ){
            setWC("10 a 12 veces por día")
            props.wc(240);

        }
    }

    return(
        <section className="step">
            <div className="step__header">
                <h1 className="step__header__title">ENERGÍA</h1>
                <h4 className="step__header__question"> ¿Cuanta energía usas... </h4>
            </div>

            <div className="step__body">
                <label className="step__body__item">
                    <p className="step__body__item__title">Tú <strong>calentador</strong> utiliza:</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="3" onChange={ ( event ) => onChangCalentador(event.target.value)} />
                    <p className="step__body__item__desc">{calentador}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuánto tiempo tardo en <strong>bañarme</strong>?</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="3" onChange={ ( event ) => onChangeBano(event.target.value)} />
                    <p className="step__body__item__desc">{bano}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">Cuando me lavo los dientes...</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeDientes(event.target.value)} />
                    <p className="step__body__item__desc">{dientes}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuántas veces por <strong>día</strong> vació el escusado o WC?</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="1" max="4" onChange={ ( event ) => onChangeWC(event.target.value)} />
                    <p className="step__body__item__desc">{wc}</p>
                </label>
            </div>
        </section>
    )
}

export default Once