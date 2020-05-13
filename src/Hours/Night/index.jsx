import React from 'react'
import DataCard from '../../Components/DataCard';

import './index.scss'

const fondo = process.env.PUBLIC_URL + '/img/noche.svg';

const Night = ( props ) => {
    console.log(props)
    return(
        <section className="Night">
            <img src={ fondo } alt="fondo"/>
            <DataCard data = { props.data } />
            
        </section>
    )
}

export default Night;