import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Contatos from "./Components/6.Contatos/Contatos"
import Footer from "./Components/7.Footer/Footer"
import DetailsPage from "./Pages/DetailsPage"
import Home from "./Pages/Home"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/servicos'>
          <DetailsPage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Contatos />
      <Footer />
    </Router>
  )
}

export default App
