import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header/Header'
import HeadBanner from './component/header/HeadBanner'
import Motivation from './component/motivation/motivation'
import Skills from './component/skills/skills'
import Project from './component/project/project'
import Education from './component/education/education'
import Footer from './component/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <Header/>
      <header>
        <HeadBanner/>
      </header>
      <motivation>
        <Motivation/>
      </motivation>
      <skills>
        <Skills/>
      </skills>
      <project id='projects'>
        <Project/>
      </project>
      <education>
        <Education/> 
      </education>
      <footer>
        <Footer/>
      </footer>
     </div>
    </>
  )
}

export default App
