import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Index from "./components/Index"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Register from './components/Register'
import Tracking from './components/Tracking'
import Dashboard from './components/AdminDashboard/Home'
import Createshipment from './components/AdminDashboard/CreateShipment'
import ListShipping from './components/AdminDashboard/ListShipping'

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path="/contact_us" component={Contact}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/tracking" component={Tracking}></Route>
        <Route path="/login" component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/dashboard/createshipment" component={Createshipment}></Route>
        <Route exact path="/dashboard/allshipments" component={ListShipping}></Route>
      </Switch>
    </Router>
  )

}