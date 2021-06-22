import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import {MainPage} from './pages/MainPage'

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/main" exact>
        <MainPage />
      </Route>
      <Redirect to="/main" />
    </Switch>
  )
}