import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import AIFeature from "./sections/AIFeature";
import Products from "./sections/Products";
import Industries from "./sections/Industries";
import Process from "./sections/Process";
import CaseStudies from "./sections/CaseStudies";
import CTA from "./sections/CTA";

function App() {
  return (
    <div className="font-[Inter]">
      <Navbar />
      <Hero />
      <AIFeature />
      <Products />
      <Industries />
      <Process />
      <CaseStudies />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
