import NavBar from "./components/NavBar.jsx"
import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import FeatureCards from "./sections/FeatureCards.jsx"
import ExperienceSection from "./sections/ExperienceSection.jsx"
import TechStack from "./sections/TechStack.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import AboutMe from "./sections/AboutMe.jsx"

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <ShowcaseSection/>
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack/>
    <AboutMe/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
