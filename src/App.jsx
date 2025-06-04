import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BestMonthOffer from './components/BestMonthOffer'
import DealOfTheDay from './components/DealOfTheDay'
import ExploreOurProducts from './components/ExploreOurProducts'
import FeaturedShoes from './components/FeaturedShoes'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import OurFeaturedProducts from './components/OurFeaturedProducts'
import StartShoppingNow from './components/StartShoppingNow'
import AdidasRed from './shoes/AdidasRed' // Import your AdidasRed component

// Home page component that contains all your main components
const HomePage = () => {
  return (
    <>
      <StartShoppingNow />
      {/* <FeaturedShoes /> */}
      <DealOfTheDay/>
      <ExploreOurProducts />
      <BestMonthOffer />
      <OurFeaturedProducts/>
    </>
  )
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/adidas-red" element={<AdidasRed />} />
            {/* Add more routes as needed */}
            <Route path="/product/:id" element={<div>Product Page - Coming Soon</div>} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App