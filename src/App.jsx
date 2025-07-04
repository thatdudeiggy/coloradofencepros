import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/NavBar'
import Hero from './Components/Hero'
import FenceEstimator from './Components/FenceEstimator'
import LeadCaptureForm from './Components/LeadCaptureForm'
import './index.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <FenceEstimator />
        <LeadCaptureForm />
      </div>
    )
  }
}

