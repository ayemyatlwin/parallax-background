import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import { Parallax } from 'react-parallax'
import Sunflower from "./Images/sunflowers.jpg"
import Text from './Components/Text'
import StatUi from './Components/StatUi'
import Footer from './Components/Footer'
const App = () => {
  return (
    <>
      <Navbar/>
      <Parallax strength={300} bgImage={Sunflower}>
        <div className="content">
          <div className="text-content">Flowers</div>
        </div>
      </Parallax>
      <Text/>
      <div className="flex items-center justify-center text-3xl">
      <StatUi/>
      </div>
      
      <Footer/>
        
       
    </>
  )
}

export default App
