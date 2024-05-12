import { useState } from 'react'
import NavBar from './component/navbar'
import Home from './component/home'
import SocialLinks from './component/social'
import About from './component/about'
import Portfolio from './component/portfolio'
import Experiance from './component/Experiance'
import Contact from './component/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experiance/>
      <Contact/>

      <SocialLinks/>
    </>
  )
}

export default App
