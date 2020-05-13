import React from 'react'
import './index.scss'
import DataCard from '../../Components/DataCard';

const fondo = process.env.PUBLIC_URL + '/img/noon.svg';

const Noon = ( props ) => {
    return(
        <section className="Noon">
            <img src={fondo} alt=""/>
            <DataCard data = { props.data } />
            
        </section>
    )
}

export default Noon;