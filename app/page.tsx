import Crew from "@/components/Crew/Crew";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Organisations from "@/components/Organizations/Organizations";
import Services from "@/components/Services/Services";
import Teams from "@/components/Teams/Teams";
import Testimonals from "@/components/Testimonals/Testimonals";
import Transform from "@/components/Transform/Transform";
import WhyUs from "@/components/WhyUs/WhyUs";
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
