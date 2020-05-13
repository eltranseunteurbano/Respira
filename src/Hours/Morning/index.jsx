import React from 'react'
import './index.scss'

import DataCard from '../../Components/DataCard';
const fondo = process.env.PUBLIC_URL + '/img/mañana.svg';


const Morning = ( props ) => {
    return(
        <section className="Morning">
            <img src={fondo} alt=""/>
            <DataCard data = { props.data } />

        </section>
    )
}

export default Morning;