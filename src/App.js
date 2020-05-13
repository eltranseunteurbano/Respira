import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import './assets/css/reset.scss'
import './assets/css/general.scss'

import * as Routes from './assets/js/Routes'

import Home from './Containers/Home'
import Country from './Containers/Country'
import Credits from './Components/Credits'

const App = () =>  {
  return (
    <HashRouter>
      <Switch>
        <Route exact path = { Routes.HOME } > <Home /> </Route>
        <Route exact path = { Routes.COLOMBIA } > <Country quality="colombia" /> </Route>
        <Route exact path = { Routes.SALUDABLE } > <Country quality="healt" /> </Route>
        <Route exact path = { Routes.ENFERMO } > <Country quality="sick" /> </Route>
        <Route exact path = { Routes.HUELLA }> <h1> Medición de la huella </h1> </Route>
        <Route path = { Routes.ERROR404 }> <h1> Error 404 </h1> </Route>
      </Switch>

      <Credits />
    </HashRouter>
  );
}

export default App;
