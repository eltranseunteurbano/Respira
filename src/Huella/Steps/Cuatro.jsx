import React from 'react'

const Cuatro = ( props ) => {

    const [ nueces, setNueces ] = React.useState(0)
    const [ mecato, setMecato ] = React.useState(0)
    const [ pastel, setPastel ] = React.useState(0)
    const [ empanadas, setEmpanadas ] = React.useState(0)
    const [ jugo, setJugo ] = React.useState(0)

    React.useEffect( () => {
        let nues = nueces * 50;
        let meca = mecato * 22;
        let past = pastel * 347;
        let empa = empanadas * 240;
        let naranja = jugo * 242;

        let total = nues + meca + past + empa + naranja;

        props.promedio ( total);
    }, [nueces, mecato, pastel, empanadas, jugo])

    return(
        <section className="step"> 
            <div className="step__header">
                <h1 className="step__header__title">COMIDA</h1>
                <h4 className="step__header__question"> ¿Qué tan seguido consumes... </h4>
            </div>

            <div className="step__form">
                <label className="step__form__item">
                    <p className="step__form__item__title">¿Cuantas veces a la <strong>semana</strong> consumes en promedio los siguientes alimentos?</p>
                    <div>
                        <p>Una bola de nueces de 60 g</p>
                        <input type="number" min={0} defaultValue={0} onChange={ ( event ) => setNueces( event.target.value )}/>
                    </div>
                    
                    <div>
                        <p>Un paquete de papas o similares</p>
                        <input type="number" min={0} defaultValue={0} onChange={ ( event ) => setMecato( event.target.value ) }/>
                    </div>

                    <div>
                        <p>Un pastel de pollo o carne o similares</p>
                        <input type="number" min={0} defaultValue={0} onChange={ ( event ) => setPastel( event.target.value ) }/>
                    </div>

                    <div>
                        <p>Empanadas</p>
                        <input type="number" min={0} defaultValue={0} onChange={ ( event ) => setEmpanadas( event.target.value ) }/>
                    </div>

                    <div>
                        <p>Jugo de naranja natural</p>
                        <input type="number" min={0} defaultValue={0} onChange={ ( event ) => setJugo( event.target.value )}/>
                    </div>
                </label>
                
            </div>

        </section>
    )
}

export default Cuatro;