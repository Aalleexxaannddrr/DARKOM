import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import {MainPage} from './pages/MainPage'
import {AuthPage} from "./pages/AuthPage"
import {RegisterPage} from "./pages/RegisterPage"

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/main" exact>
        <MainPage />
      </Route>
      <Route path="/admin" exact>
          <AuthPage />
      </Route>
        <Route path="/register" exact>
            <RegisterPage />
        </Route>
      <Redirect to="/main" />
    </Switch>
  )
}