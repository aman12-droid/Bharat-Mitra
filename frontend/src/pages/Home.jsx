import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Stats from "../components/Stats/Stats";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import FAQ from "../components/FAQ/FAQ";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import SchemeFinder from "../components/SchemeFinder/SchemeFinder";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SchemeFinder />
      <SearchBar />
      <Services />
      <WhyChooseUs />
      <Stats />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;