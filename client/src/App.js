// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {useRoutes} from './routes'
import { Navbar } from './components/Navbar'
import {Footer} from './components/Footer'
import {Slider} from './components/slider'

// import { Loader } from './components/Loader'
// import { useHttp } from './hooks/http.hook'

function App() {

  const routes = useRoutes()
  // const loading = useHttp()

  // if (loading) {
  //   return <Loader />
  // }

  return (
    <Router>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
      <Navbar />
      <div className="container">
        {routes}
         </div>
      <Footer />
    </Router>
  )
}

export default App;
