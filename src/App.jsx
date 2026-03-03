import './App.css'
import Hero from "./Hero.jsx"
import AboutMe from "./About-Me.jsx"
import MySkills from "./myskills.jsx"
function App() {
  return (
    <>
    <div class = "margin">
      <Hero />
      <div>
        <AboutMe />
        <MySkills />
      </div>
    </div>
    </>
  )
}

export default App
