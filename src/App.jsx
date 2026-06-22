import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import AIFeature from "./sections/AIFeature";
import Products from "./sections/Products";
import Industries from "./sections/Industries";
import Process from "./sections/Process";
import CaseStudies from "./sections/CaseStudies";
import CTA from "./sections/CTA";
import AIAutomation from "./pages/AIAutomation";
import SEO from "./pages/SEO";
function App() {
  const Home = () => (
    <div>
      <Hero />
      <AIFeature />
      <Products />
      <Industries />
      <Process />
      <CaseStudies />
      <CTA />
    </div>
  );

  return (
    <Router>
      <div className="font-[Inter]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          <Route path="/seo" element={<SEO />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
