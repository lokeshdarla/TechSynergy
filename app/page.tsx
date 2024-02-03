import Crew from "@/components/Crew";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Organisations from "@/components/Organizations";
import Services from "@/components/Services";
import Teams from "@/components/Teams";
import Testimonals from "@/components/Testimonals";
import Transform from "@/components/Transform";
import WhyUs from "@/components/WhyUs";
export default function Home() {
  return (
   <>
   <Hero/>
   <Teams/>
   <Services/>
   <Organisations/> 
   <Testimonals/>
   <WhyUs/>
   <Crew/>
   <Transform/>
   <Footer/>
   </>
  );
}
