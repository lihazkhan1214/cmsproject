import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import { CardMoving } from "../../components/CardMoving";
import OfferService from "../../components/OfferService";
import { MoveService1 } from "../../components/MoveService1";
import { MoveService2 } from "../../components/MoveService2";
import ShowItems from "../../components/ShowItems";
import PricingSection from "../../components/PricingSection";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      
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

export default Home
