import React from 'react'

const Nueve = ( props ) => {
    
    const [ convencionales, setConvencionales ] = React.useState("No hay")
    const [ ahorradores, setAhorradores ] = React.useState("No hay")

    const onChangeConvencionales = ( value ) => {
        value = parseInt(value)

        if( value === 1 ){
            props.conven(190);
            setConvencionales("1 - 3")

        } else if ( value === 2 ) {
            props.conven(480);
            setConvencionales("4 - 6")

        } else if ( value === 3 ) {
            props.conven(780);
            setConvencionales("7 - 9")

        } else if ( value === 4 ) {
            props.conven(1000);
            setConvencionales("10 - 12")

        } else if ( value === 5 ) {
            props.conven(1300);
            setConvencionales("13 - 15")

        } else if ( value === 0 ) {
            props.conven(0);
            setConvencionales("No hay")
        } 

    }

    const onChangeAhorradores = ( value ) => { 
        value = parseInt(value)

        if( value === 1 ){
            props.ahorra(78);
            setAhorradores("1 - 3")

        } else if ( value === 2 ) {
            props.ahorra(190);
            setAhorradores("4 - 6")

        } else if ( value === 3 ) {
            props.ahorra(310);
            setAhorradores("7 - 9")

        } else if ( value === 4 ) {
            props.ahorra(430);
            setAhorradores("10 - 12")

        } else if ( value === 5 ) {
            props.ahorra(540);
            setAhorradores("13 - 15")

        } else if ( value === 0 ) {
            props.ahorra(0);
            setAhorradores("No hay")
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
                    <p className="step__body__item__title">¿Cuántos <strong>bombillos convencionales</strong> hay en tu casa?</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeConvencionales(event.target.value)} />
                    <p className="step__body__item__desc">{convencionales}</p>
                </label>

                <label className="step__body__item">
                <p className="step__body__item__title">¿Cuántos <strong>bombillos ahorradores</strong> hay en tu casa?</p>
                    <input className="step__body__item__range" defaultValue="0" type="range" min="0" max="5" onChange={ ( event ) => onChangeAhorradores(event.target.value)} />
                    <p className="step__body__item__desc">{ahorradores}</p>
                </label>

                <label className="step__form__item">
                    <div>
                        <p>¿Cuantas <strong>personas</strong> viven en tu casa?</p>
                        <input type="number" min={0} defaultValue={0} onChange={ ( event ) => props.personas( parseInt( event.target.value ) * 76 ) }/>
                    </div>
                </label>

                <label className="step__form__item">
                    <div>
                        <p>¿Cuantos <strong>teléfonos celulares</strong> propios tienes?</p>
                        <input type="number" min={0} defaultValue={0} onChange={ ( event ) => props.celu( parseInt( event.target.value ) ) }/>
                    </div>
                </label>

            </div>

        </section>
    )
}

export default Nueve;