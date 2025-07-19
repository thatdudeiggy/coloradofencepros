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
      <div className="px-4 py-6 md:px-8 md:py-10 lg:px-12 lg:py-14">
        <Navbar />
        <Hero />
        <FenceEstimator />
        <LeadCaptureForm />
      </div>
    )
  }
}
