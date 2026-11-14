import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TopQualityCare from './components/TopQualityCare'
import Betwen from './components/Betwen'
import FeaturedClinics from './components/FeaturedClinics'
import Howwork from './components/Howwork'
import Footer from './components/Footer'
import SearchResults from './components/SearchResults'
import { Routes, Route } from 'react-router-dom' // لا تنسي تستوردي Routes كمان

function App() {
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    
    const handleSearch = (specialty: string, location: string) => {
        setSelectedSpecialty(specialty);
        setSelectedLocation(location);
    }

    return(
    <>
        <Navbar/>
        
        <Routes>
            {/* المسار الأول: الصفحة الرئيسية */}
            <Route 
                path="/" 
                element={
                    <>
                        <div className='min-h-screen bg-cream-50'>
                            <Hero onSearch={handleSearch}/>
                        </div>
                        <Betwen/>
                        <TopQualityCare/>
                        <Betwen/>
                        <FeaturedClinics/>
                        <Betwen/>
                        <Howwork/>
                        <Betwen/>
                    </>
                } 
            />

            {/* المسار الثاني: صفحة نتائج البحث */}
            <Route
                path="/search"
                element={
                    <div className='min-h-screen bg-cream-50 pt-10'>
                        <SearchResults specialty={selectedSpecialty} location={selectedLocation} />
                    </div>
                }
            />
        </Routes>

        <Footer/>
    </>
    )
}

export default App