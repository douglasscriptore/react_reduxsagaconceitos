import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from '../pages/main'
import Footer from '../components/Footer'

/**
 * BrowserRouter: indica para o react que as rotas estarão do browser
 * Switch: Evita que 2 rotas sejam chamadas ao msm tempo
 * Route: Define a rota em si é muito aconcelhavel colocar exact p/ o router dom chamar a rota exata
 */

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
      <Footer />
    </Fragment>
  </BrowserRouter>
)

export default Routes
