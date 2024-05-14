import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import { MoveService1 } from "./components/MoveService1";
import { MoveService2 } from "./components/MoveService2";
import OfferService from "./components/OfferService";
import ShowItems from "./components/ShowItems";
import Footer from "./components/Footer";
import PricingSection from "./components/PricingSection";
import { CardMoving } from "./components/CardMoving";

function App() {
  return (
    <div className=" mx-auto 2xl:max-w-7xl">
      <Navbar/>
      <Hero/>
     <CardMoving/>
      
      <OfferService/>

      <MoveService1/>
      <MoveService2/>
      <ShowItems/>

      <PricingSection/>
      <Footer/>
      


      
    </div>
  )
}

export default App
