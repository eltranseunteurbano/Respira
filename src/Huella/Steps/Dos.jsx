import React from 'react'

const Dos = ( props ) => {

    const [ frutaDesc, setFrutaDesc ] = React.useState("No consumo carne de res")
    const [ vegatalesDes, setVegatalesDes ] = React.useState("No consumo carne de pollo")
    const [ panDesc, setPanDesc ] = React.useState("No consumo carne de cerdo")
    const [ tortillaDesc, setTortillaDesc ] = React.useState("No consumo carne de pescado")

    const onChangeRes = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            props.res(57);
            setFrutaDesc("1 a 2 veces por la semana")

        } else if ( value === 2 ) {
            props.res(121);
            setFrutaDesc("2 a 4 veces a la semana")

        } else if ( value === 3 ) {
            props.res(190);
            setFrutaDesc("4 a 6 veces a la semana")

        } else if ( value === 4 ) {
            props.res(267);
            setFrutaDesc("6 a 8 veces a la semana")

        } else if ( value === 5 ) {
            props.res(343);
            setFrutaDesc("8 a 10 veces a la semana")

        }  else if ( value === 0 ) {
            props.res(0);
            setFrutaDesc("No consumo carne de res")

        } 

    }

    const onChangePollo = ( value ) => { 
        value = parseInt(value)

        if( value === 1 ){
            props.pollo(234);
            setVegatalesDes("1 a 2 veces a la semana")

        } else if ( value === 2 ) {
            props.pollo(470);
            setVegatalesDes("2 a 4 veces a la semana")

        } else if ( value === 3 ) {
            props.pollo(789);
            setVegatalesDes("4 a 6 veces a la semana")

        } else if ( value === 4 ) {
            props.pollo(1107);
            setVegatalesDes("6 a 8 veces a la semana")

        } else if ( value === 0 ) {
            props.pollo(0);
            setVegatalesDes("No consumo carne de pollo")
        }
    }

    const onChangeCerdo = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            props.cerdo(12);
            setPanDesc("1 a 2 veces a la semana")

        } else if ( value === 2 ) {
            props.cerdo(25);
            setPanDesc("2 a 4 veces a la semana")

        } else if ( value === 3 ) {
            props.cerdo(41);
            setPanDesc("4 a 6 veces a la semana")

        } else if ( value === 4 ) {
            props.cerdo(140);
            setPanDesc("6 a 8 veces a la semana")

        } else if ( value === 5 ) {
            props.cerdo(155);
            setPanDesc("8 a 10 veces a la semana")

        } else if ( value === 0 ) {
            props.cerdo(0);
            setPanDesc("No consumo carne de cerdo")
        }

    }

    const onChangePescao = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            props.pescado(217);
            setTortillaDesc("1 a 2 veces a la semana")

        } else if ( value === 2 ) {
            props.pescado(425);
            setTortillaDesc("2 a 4 veces a la semana")

        } else if ( value === 3 ) {
            props.pescado(711);
            setTortillaDesc("4 a 6 veces a la semana")

        } else if ( value === 4 ) {
            props.pescado(998);
            setTortillaDesc("6 a 8 veces a la semana")

        } else if ( value === 5 ) {
            props.pescado(1298);
            setTortillaDesc("8 a 10 veces a la semana")

        } else if ( value === 0 ) {
            props.pescado(0);
            setTortillaDesc("No consumo carne de pescado")
        }
    }

    return(
        <section className="step">

            <div className="step__header">
                <h1 className="step__header__title">COMIDA</h1>
                <h4 className="step__header__question"> ¿Qué tan seguido comes... </h4>
            </div>

            <div className="step__body">
                
                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuántas veces a la <strong>semana</strong> consumes <strong>carne de res</strong>?</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeRes(event.target.value)} />
                    <p className="step__body__item__desc">{frutaDesc}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuántas veces a la <strong>semana</strong> consume <strong>carne de pollo</strong>?</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="4" onChange={ ( event ) => onChangePollo(event.target.value)} />
                    <p className="step__body__item__desc">{vegatalesDes}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuántas veces a la <strong>semana</strong> consumes <strong>carne de cerdo</strong>?</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeCerdo(event.target.value)} />
                    <p className="step__body__item__desc">{panDesc}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuantas veces a la <strong>semana</strong> consumes  <strong>carne de pescado</strong>?</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangePescao(event.target.value)} />
                    <p className="step__body__item__desc">{tortillaDesc}</p>
                </label>
            
            </div>

        </section>
    )

}

export default Dos;