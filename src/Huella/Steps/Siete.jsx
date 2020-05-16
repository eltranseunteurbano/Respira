import React from 'react'

const Siete = ( props ) => {
    
    const [ kmAuto, setKmAuto ] = React.useState("No uso automovil propio o taxi o pirata")

    const onChangeAuto = ( value ) => {
        console.log(value)
        if( value === true ){
            props.auto(12000)
        } else if ( value === false ){
            props.auto(0)

        }
        
    }

    const onChangeKm = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            props.autoKm(520);
            setKmAuto("2 - 6 kilómetros diarios")

        } else if ( value === 2 ) {
            props.autoKm(1200);
            setKmAuto("7 - 12 kilómetros diarios")

        } else if ( value === 3 ) {
            props.autoKm(2000);
            setKmAuto("13 - 18 kilómetros diarios")

        } else if ( value === 4 ) {
            props.autoKm(2800);
            setKmAuto("19 - 24 kilómetros diarios")

        } else if ( value === 4 ) {
            props.autoKm(3500);
            setKmAuto("25 - 30 kilómetros diarios")

        } else if ( value === 0 ) {
            props.autoKm(0);
            setKmAuto("No uso automovil propio o taxi o pirata")

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
                    <p className="step__body__item__title">¿Cuántos kilómetros recorres <strong>diariamente</strong> en el <strong>MIO</strong>?</p>
                    <p className="step__body__item__subtitle">Nota: Considera recorridos de ida y vuelta</p>
                    
                    <div className="step__body__item__radius">
                        <div>
                            <input type="radio" id="tiene" name="car" value={true} onChange={ () => onChangeAuto(true)}/>
                            <label htmlFor="tiene">Si</label>
                        </div>
                        <div>
                            <input type="radio" id="notiene" name="car" value={false} onChange={ () => onChangeAuto(false)}/>
                            <label htmlFor="notiene">No</label>
                        </div>
                    </div>

                </label>

                <label className="step__body__item">
                    <p className="step__body__item__title">¿Cuántos kilómetros recorres <strong>diariamente</strong> en el <strong>auto propio o taxi o pirata</strong> en caso de que lo uses?</p>
                    <p className="step__body__item__subtitle">Nota: Considera recorridos de ida y vuelta</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeKm( event.target.value ) } />
                    <p className="step__body__item__desc">{kmAuto}</p>
                </label>

            </div>

        </section>
    )
}

export default Siete;