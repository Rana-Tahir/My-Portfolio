
import About from "./components/about"
import Contact from "./components/contact"
import Herosection from "./components/herosection"
import Projects from "./components/projects"
import Skill from "./components/skill"


export default function Home () {
  return (
    <div>
       <Herosection /> 
        <About />
        <Skill />
        <Projects /> 
        <Contact />
    </div>

  )

}

