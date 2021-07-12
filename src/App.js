import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import ProtectedRoutes from "./authHandler/ProtectedRoutes"

import Index from "./components/Index"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Register from './components/Register'
import Tracking from './components/Tracking'
import Dashboard from './components/AdminDashboard/Home'
import Createshipment from './components/AdminDashboard/CreateShipment'
import ListShipping from './components/AdminDashboard/ListShipping'
import Manageshipment from './components/AdminDashboard/Manageshipment'

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path="/contact_us" component={Contact}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route exact path="/tracking" component={Tracking}></Route>
        <ProtectedRoutes exact path="/dashboard" component={Dashboard} />
        <ProtectedRoutes exact path="/dashboard/createshipment" component={Createshipment} />
        <ProtectedRoutes exact path="/dashboard/allshipments" component={ListShipping} />
        <ProtectedRoutes exact path="/dashboard/manageshipment/" component={Manageshipment} />
        <ProtectedRoutes exact path="/dashboard/manageshipment/:tracking" component={Manageshipment} />
      </Switch>
    </Router>
  )

}