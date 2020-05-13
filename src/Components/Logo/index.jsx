import React from 'react';
import { Link } from 'react-router-dom'
import * as Routes from '../../assets/js/Routes';

import './index.scss'

const Logo = () => {
    return (
        <Link to={Routes.HOME} className="Logo">
            <h1> Respira</h1>
        </Link>
    )
}

export default Logo;