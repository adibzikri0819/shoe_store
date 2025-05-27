import './App.css'
import BestMonthOffer from './components/BestMonthOffer'
import DealOfTheDay from './components/DealOfTheDay'
import ExploreOurProducts from './components/ExploreOurProducts'
import FeaturedShoes from './components/FeaturedShoes'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import StartShoppingNow from './components/StartShoppingNow'

function App() {
  return (
    <div>
      <Navbar />
      
      <main>
        <StartShoppingNow />
        <FeaturedShoes />
        <DealOfTheDay/>
        <ExploreOurProducts />
        <BestMonthOffer />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
