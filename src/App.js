import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import './assets/css/reset.scss'
import './assets/css/general.scss'

import * as Routes from './assets/js/Routes'

import Home from './Containers/Home'
import Credits from './Components/Credits'

import India from './Components/India'
import Colombia from './Components/Colombia'
import Kirguistan from './Components/Kirguistan'
import Huella from './Huella'

const App = () =>  {
  return (
    <HashRouter>
      <Switch>
        <Route exact path = { Routes.HOME } > <Home /> </Route>
        <Route exact path = { Routes.COLOMBIA } > <Colombia quality="colombia" /> </Route>
        <Route exact path = { Routes.SALUDABLE } > <Kirguistan quality="healt" /> </Route>
        <Route exact path = { Routes.ENFERMO } > <India quality="sick" /> </Route>
        <Route exact path = { Routes.HUELLA }> <Huella /> </Route>
        <Route path = { Routes.ERROR404 }> <h1> Error 404 </h1> </Route>
      </Switch>

      <Credits />
    </HashRouter>
  );
}

export default App;
