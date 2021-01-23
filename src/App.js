import React, { useState } from 'react'
import axios from "axios"
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

export default function App() {
  const [datax, setdata] = useState({})

  let formdata = new FormData()
  formdata.append('name', 'hyman')
  formdata.append('age', '40')

  const testbtn = async () => {
    axios({
      method: "post",
      url: 'http://localhost/rald/producttrackerapi/api_v1/controller/controller.php',
      data: formdata
    })
      .then(res => {
        console.log(res);
        setdata(res.data)
      })
      .catch(err => console.error(err))
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path="/contact_us" component={Contact}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/tracking" component={Tracking}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
  )

}