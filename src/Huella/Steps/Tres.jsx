import React from 'react'

const Tres = ( props ) => {

    const [ frutaDesc, setFrutaDesc ] = React.useState("No consumo yogurth")
    const [ vegatalesDes, setVegatalesDes ] = React.useState("No consumo leche")

    const onChangeYoughrt = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            props.yogurt(104);
            setFrutaDesc("1 a 2 veces por la semana")

        } else if ( value === 2 ) {
            props.yogurt(243);
            setFrutaDesc("3 a 4 raciones a la semana")

        } else if ( value === 3 ) {
            props.yogurt(382);
            setFrutaDesc("5 a 6 raciones a la semana")

        } else if ( value === 4 ) {
            props.yogurt(521);
            setFrutaDesc("7 a 8 raciones a la semana")

        } else if ( value === 5 ) {
            props.yogurt(660);
            setFrutaDesc("9 a 10 raciones a la semana")
        
        } else if ( value === 0 ) {
            props.yogurt(0);
            setFrutaDesc("No consumo yogurth")
        } 

    }

    const onChangeLeche = ( value ) => { 
        value = parseInt(value)

        if( value === 1 ){
            props.leche(234);
            setVegatalesDes("1 a 2 raciones a la semana")

        } else if ( value === 2 ) {
            props.leche(470);
            setVegatalesDes("3 a 4 raciones a la semana")

        } else if ( value === 3 ) {
            props.leche(789);
            setVegatalesDes("5 a 6 raciones a la semana")

        } else if ( value === 4 ) {
            props.leche(1107);
            setVegatalesDes("7 a 8 raciones a la semana")

        } else if ( value === 5 ) {
            props.leche(1107);
            setVegatalesDes("9 a 10 raciones a la semana")

        } else if ( value === 0 ) {
            props.leche(0);
            setVegatalesDes("No consumo leche")
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
                    <p className="step__body__item__title">¿Cuántas veces a la <strong>semana</strong> consumes <strong>yogurth</strong>?</p>
                    <p className="step__body__item__subtitle">Considera una ración en presentación individual de vaso o para beber.</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeYoughrt(event.target.value)} />
                    <p className="step__body__item__desc">{frutaDesc}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuántas veces a la <strong>semana</strong> consume <strong>leche</strong>?</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeLeche(event.target.value)} />
                    <p className="step__body__item__desc">{vegatalesDes}</p>
                </label>

                
            
            </div>

        </section>
    )

}

export default Tres;