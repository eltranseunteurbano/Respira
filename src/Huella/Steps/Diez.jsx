import React from 'react'

const Diez = ( props ) => {

    const [ tv, setTV ] = React.useState("0 horas a la semana");
    const [ pc, setPC ] = React.useState("0 horas a la semana");
    const [ dvd, setDvd ] = React.useState("0 horas a la semana");
    const [ sonido, setSonido ] = React.useState("0 horas a la semana")

    const [ tvValue, setTvValue ] = React.useState(0);
    const [ pcValue, setPcValue ] = React.useState(0)
    const [ dvdValue, setDvdValue ] = React.useState(0)
    const [ sonidoValue, setSonidoValue ] = React.useState(0)

    const onChangeTv = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            setTV("7hrs o menos a la semana")
            setTvValue(28);

        } else if( value === 2 ){
            setTV("8 hrs a 12 hrs a la semana")
            setTvValue(70);

        } else if( value === 3 ){
            setTV("13 hrs a 17 hrs a la semana")
            setTvValue(100);

        } else if( value === 4 ){
            setTV("18 hrs a 22 hrs a la semana")
            setTvValue(140);

        } else if( value === 5 ){
            setTV("23 hrs a 28 hrs a la semana")
            setTvValue(170);

        } else if( value === 0 ){
            setTV("0 horas a la semana")
            setTvValue(0);
        } 
    }

    const onChangePc = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            setPC("15 hrs a 20 hrs a la semana")
            setPcValue(120);

        } else if( value === 2 ){
            setPC("21 hrs a 25 hrs a la semana")
            setPcValue(160);

        } else if( value === 3 ){
            setPC("26 hrs a 30 hrs a la semana")
            setPcValue(190);

        } else if( value === 4 ){
            setPC("31 hrs a 35 hrs a la semana")
            setPcValue(230);

        } else if( value === 5 ){
            setPC("36 hrs a 40 hrs a la semana")
            setPcValue(260);

        } else if( value === 0 ){
            setPC("0 horas a la semana")
            setPcValue(0);
        } 
    }

    const onChangeDvd = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            setDvd("2 hrs a 3 hrs a la semana")
            setDvdValue(3);

        } else if( value === 2 ){
            setDvd("4 hrs a 6 hrs a la semana")
            setDvdValue(6);

        } else if( value === 3 ){
            setDvd("7 hrs a 9 hrs a la semana")
            setDvdValue(9);

        } else if( value === 4 ){
            setDvd("10 hrs a 12 hrs a la semana")
            setDvdValue(12);

        } else if( value === 5 ){
            setDvd("13 hrs a 15 hrs a la semana")
            setDvdValue(16);

        } else if( value === 0 ){
            setDvd("0 horas a la semana")
            setDvdValue(0);
        } 
    }

    const onChangeSonido = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            setSonido("2 hrs a 3 hrs a la semana")
            setSonidoValue(9);

        } else if( value === 2 ){
            setSonido("4 hrs a 6 hrs a la semana")
            setSonidoValue(17);

        } else if( value === 3 ){
            setSonido("7 hrs a 9 hrs a la semana")
            setSonidoValue(28);

        } else if( value === 4 ){
            setSonido("10 hrs a 12 hrs a la semana")
            setSonidoValue(38);

        } else if( value === 5 ){
            setSonido("13 hrs a 15 hrs a la semana")
            setSonidoValue(48);

        } else if( value === 0 ){
            setSonido("0 horas a la semana")
            setSonidoValue(0);
        } 
    }

    React.useEffect( () => {
        let suma = tvValue + pcValue + dvdValue + sonidoValue;
        props.encendidos( suma )
    },[ tvValue, pcValue, dvdValue, sonidoValue ])

    return(
        <section className="step">
            <div className="step__header">
                <h1 className="step__header__title">ENERGÍA</h1>
                <h4 className="step__header__question"> ¿Cuanta energía usas... </h4>
            </div>

            <div className="step__body">
                <label className="step__body__item">
                    <p className="step__body__item__title"><strong>Televisor</strong></p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeTv(event.target.value)} />
                    <p className="step__body__item__desc">{tv}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title"><strong>Computador</strong></p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangePc(event.target.value)} />
                    <p className="step__body__item__desc">{pc}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title"><strong>DVD</strong></p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeDvd(event.target.value)} />
                    <p className="step__body__item__desc">{dvd}</p>
                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title"><strong>Estéreo</strong></p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeSonido(event.target.value)} />
                    <p className="step__body__item__desc">{sonido}</p>
                </label>
            </div>
        </section>
    )
}

export default Diez