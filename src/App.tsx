import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TopQualityCare from './components/TopQualityCare'
import Betwen from './components/Betwen'
import FeaturedClinics from './components/FeaturedClinics'
import Howwork from './components/Howwork'
import Footer from './components/Footer'

function App() {
    return(
    <>
    <Navbar/>
    <Hero />
    {/* <hr className='brown'/> */}
    <Betwen/>
    <TopQualityCare/>
    <Betwen/>
    <FeaturedClinics/>
    <Betwen/>
    <Howwork/>
    <Betwen/>
    <Footer/>
    </>
    )
}

export default App