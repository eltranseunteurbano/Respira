import React from 'react'
import './index.scss'

const Contador = ( props ) => {

    return(
        <section className="numeroPreguntas">
            <div className="numeroPreguntas__progress">
                <div className="progress" style={{width: '' + ( props.steps / props.stepsTotal ) * 100 + '%'  }}></div>
            </div>
        </section>
    )
}

export default Contador;