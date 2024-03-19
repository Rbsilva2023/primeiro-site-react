import {AboutMeSection}  from "./components/AboutMeSection"
import  {BannerSection}  from "./components/BannerSection"
import  {ProjectSection} from "./components/ProjectsSection"
import  {TechSection} from "./components/TechSection"
import  {Footer} from "./components/footer"
import {Header} from "./components/header"
import "./styles/reset.css"
import './styles/style.css'
import './styles/global.css'

function App() {
  

  return (
    <>
      <Header/>
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectSection />
      <Footer />
    </>
  )
}

export default App
