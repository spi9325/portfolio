import './App.css'
import { About } from './component/About/About'
// import About from './component/About/About'
import BlurBlob from './component/BlurBlob'
import Contact from './component/Contact/Contact'
import Education from './component/Education/Education'
import Experience from './component/Experence/Experence'
import Footer from './component/Footer/Footer'
import { Navbar } from './component/Navbar/Navbar'
// import Navbar from './component/Navbar/Navbar'
import Skills from './component/Skills/Skills'
import Work from './component/Work/Work'

function App() {

  return (
    <div className="]">

       <BlurBlob position={{ top: '40%', left: '50%' }} size={{ width: '50%', height: '40%' }}/>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-5">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
