import React from 'react'

const Seis = ( props ) => {
    
    const [ transporte, setTransporte ] = React.useState("No uso el MIO u otros buses")
    const [ transporteAvion, setTransporteAvion ] = React.useState("No uso avión")

    const onChangeMIO = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            props.transporte(25);
            setTransporte("2 - 6 kilómetros diarios")

        } else if ( value === 2 ) {
            props.transporte(380);
            setTransporte("7 - 12 kilómetros diarios")

        } else if ( value === 3 ) {
            props.transporte(510);
            setTransporte("13 - 18 kilómetros diarios")

        } else if ( value === 4 ) {
            props.transporte(630);
            setTransporte("19 - 24 kilómetros diarios")

        } else if ( value === 4 ) {
            props.transporte(780);
            setTransporte("25 - 30 kilómetros diarios")

        } else if ( value === 0 ) {
            props.transporte(0);
            setTransporte("No uso el MIO u otros buses")

        } 

    }

    const onChangeAvion = ( value ) => { 
        value = parseInt(value)
        if( value === 1 ){
            props.avion(1100);
            setTransporteAvion("Menos de 2 horas")

        } else if ( value === 2 ) {
            props.avion(4400);
            setTransporteAvion("Entre 2 y 7 horas")

        } else if ( value === 3 ) {
            props.avion(8800);
            setTransporteAvion("Entre 7 y 15 horas")

        } else if ( value === 4 ) {
            props.avion(11100);
            setTransporteAvion("Entre 15 y 25 horas")

        } else if ( value === 5 ) {
            props.avion(22200);
            setTransporteAvion("Más de 25 horas")

        } else if ( value === 0 ) {
            props.avion(0);
            setTransporteAvion("0 kilómetros diarios")
        }
    }

    return(
        <section className="step"> 
            <div className="step__header">
                <h1 className="step__header__title">TRANSPORTE</h1>
                <h4 className="step__header__question"> ¿Cómo te transportas... </h4>
            </div>

            <div className="step__body">
                
                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuántos kilómetros recorres <strong>diariamente</strong> en el <strong>MIO</strong> u otros <strong>buses</strong>?</p>
                    <p className="step__body__item__subtitle">Nota: Considera recorridos de ida y vuelta</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeMIO(event.target.value)} />
                    <p className="step__body__item__desc">{transporte}</p>
                </label>

                <label className={ transporte!== "No uso el MIO" ? "step__body__item" : "step__body__item step__body__item-disabled" }>
                    <p className="step__body__item__title">¿Cuántas <strong>horas</strong> en promedio viajas en <strong>avión</strong> al año?</p>
                    <p className="step__body__item__subtitle">Nota: Considera recorridos de ida y vuelta</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" disabled={ transporte!== "No uso el MIO" ? false : true } onChange={ ( event ) => onChangeAvion( parseInt( event.target.value ) ) } />
                    <p className="step__body__item__desc">{transporteAvion}</p>
                </label>

            </div>

        </section>
    )
}

export default Seis;