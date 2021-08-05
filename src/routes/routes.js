import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Checkout from '../pages/Checkout'
import Success from '../pages/Success/'
import Product from '../pages/Product'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={Checkout} path='/checkout' exact />
      <Route component={Success} path='/success' exact />
      <Route component={Product} path='/product/:id' exact />
    </BrowserRouter>
  )
}

export default Routes
