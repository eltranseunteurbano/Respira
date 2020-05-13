import React from 'react'
import './index.scss';

import * as Routes from '../../assets/js/Routes';

import Logo from '../../Components/Logo'
import Country from '../../Components/Countries'

import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <section className="Home">
        <Country quality='colombia'/>
           <article className="Home__content">
                <Logo />
                <div className="Home__content__body">
                    <h1 className="Home__content__body__title">Bienvenido/a</h1>
                    <p className="Home__content__body__text">Aquí podrás observar en tiempo real la condición en que se encuentra el aire de Colombia, la temperatura, la hora del día y la población dependiendo del estado del entorno. </p>
                    <Link to={ Routes.COLOMBIA } className="Home__content__body__btn"> Iniciar </Link>
                </div>
                <div />

            </article>
        </section>
    )
}

export default Home;