import React from 'react'
import './index.scss'

import DataCard from '../../Components/DataCard';

const fondo = process.env.PUBLIC_URL + '/img/afternoon.svg';

const AfterNoon = ( props ) => {
    return(
        <section className="AfterNoon">
            <img src={fondo} alt=""/>
            <DataCard data = { props.data } />
        </section>
    )
}

export default AfterNoon;