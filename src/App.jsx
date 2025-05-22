import './App.css'
import BestMonthOffer from './components/BestMonthOffer'
import ExploreOurProducts from './components/ExploreOurProducts'
import FeaturedShoes from './components/FeaturedShoes'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import StartShoppingNow from './components/StartShoppingNow'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <StartShoppingNow />
        <FeaturedShoes />
        <ExploreOurProducts />
        <BestMonthOffer />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
