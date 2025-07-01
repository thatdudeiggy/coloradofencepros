import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import Stats from '../Components/Stats/Stats'
import ProjectList from '../Components/Project/ProjectList'
import AboutMe from './AboutMe'

export const Home = () => {
  return (
      <div className=' mx-auto  lg:mx-14'>
      <Hero />
      <Stats />
      <ProjectList />
      <AboutMe />
      
      
      </div>
  )
}
