import GrowTogether from "./components/home/GrowTogether";
import HeroBanner from "./components/home/HeroBanner";
import OptimizeFormSc from "./components/home/OptimizeFormSc";
import OurIndustries from "./components/home/OurIndustries";
import OurTestimonials from "./components/home/OurTestimonials";
import WhyUs from "./components/home/WhyUs";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <OptimizeFormSc />
      <WhyUs />
      <OurIndustries />
      <OurTestimonials />
      <GrowTogether />
      <Footer />
    </div>
  );
}
