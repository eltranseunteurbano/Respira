import React from 'react'

const Ocho = ( props ) => {

    let valuesElectro = [ false, false, false, false, false, false ];
    let plancha = 0
    let licuadora = 0
    let jugos = 0
    let microondas = 0
    let refrigerador = 0
    let lavadora = 0
    let totalSuma = 0;

    const onChangeElectrodomesticos = ( item, value) => {
        if( item === 'plancha' ) {
            valuesElectro[0] = value;

            if ( value ) {
                plancha = 10
            } else {
                plancha = 0
            }
            
        } else if( item === 'licuadora' ) {
            valuesElectro[1] = value;
            
            if ( value ) {
                licuadora = 11
            } else {
                licuadora = 0
            }
            
        } else if( item === 'jugos' ) {
            valuesElectro[2] = value;
            
            if ( value ) {
                jugos = 6
            } else {
                jugos = 0
            }
            
        } else if( item === 'microondas' ) {
            valuesElectro[3] = value;
            
            if ( value ) {
                microondas = 56
            } else {
                microondas = 0
            }
            
        } else if( item === 'refrigerador' ) {
            valuesElectro[4] = value;
            if ( value ) {
                refrigerador = 4400
            } else {
                refrigerador = 0
            }
        } else if( item === 'lavadora' ) {
            valuesElectro[5] = value;
            
            if ( value ) {
                lavadora = 35
            } else {
                lavadora = 0
            }
        }
        totalSuma = plancha + licuadora + jugos + microondas + refrigerador + lavadora;
        props.electro(totalSuma)
    }
    

    return(
        <section className="step"> 
            <div className="step__header">
                <h1 className="step__header__title">ENERGÍA</h1>
                <h4 className="step__header__question"> ¿Cuanta energía usas... </h4>
            </div>

            <div className=" step__checkbox">
                
                <label className="step__body__item">
                    <p className="step__body__item__title">De los siguients <strong>electrodimésticos</strong> ¿Cúales tienes en tu casa?</p>
                    <div className="step__body__item__checkbox">
                        <div>
                            <input type="checkbox" id="plancha" name="electrodomestico" onChange={ () => onChangeElectrodomesticos('plancha', !valuesElectro[0])}/>
                            <label htmlFor="plancha">Plancha</label>
                        </div>
                        <div>
                            <input type="checkbox" id="licuadora" name="electrodomestico" onChange={ () => onChangeElectrodomesticos('licuadora', !valuesElectro[1])} />
                            <label htmlFor="licuadora">Licuadora</label>
                        </div>
                        <div>
                            <input type="checkbox" id="jugos" name="electrodomestico" onChange={ () => onChangeElectrodomesticos('jugos', !valuesElectro[2])}/>
                            <label htmlFor="jugos">Extractor de juegos</label>
                        </div>
                        <div>
                            <input type="checkbox" id="microondas" name="electrodomestico" onChange={ () => onChangeElectrodomesticos('microondas', !valuesElectro[3])}/>
                            <label htmlFor="microondas">Microondas</label>
                        </div>
                        <div>
                            <input type="checkbox" id="refrigerador" name="electrodomestico" onChange={ () => onChangeElectrodomesticos('refrigerador', !valuesElectro[4])}/>
                            <label htmlFor="refrigerador">Refrigerador</label>
                        </div>
                        <div>
                            <input type="checkbox" id="lavadora" name="electrodomestico" onChange={ () => onChangeElectrodomesticos('lavadora', !valuesElectro[5])}/>
                            <label htmlFor="lavadora">Lavadora</label>
                        </div>
                    </div>
                </label>

            </div>

        </section>
    )
}

export default Ocho;