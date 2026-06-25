import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import DiscoveryModal from "./components/DiscoveryModal";
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
import CaseStudyPage from "./pages/CaseStudy";
import CustomSolutions from "./pages/CustomSolutions";
import DigitalMarketing from "./pages/DigitalMarketing";
import Softwaredevelopment from "./pages/Softwaredevelopment";
import WebDevlopment from "./pages/WebDevelopment";
import NftDevelopment from "./pages/NftDevelopment";
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
      <ModalProvider>
        <div className="font-[Inter]">
          <DiscoveryModal />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-automation" element={<AIAutomation />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/case-study" element={<CaseStudyPage />} />
            <Route path="/custom-solutions" element={<CustomSolutions />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/web-development" element={<WebDevlopment />} />
            <Route path="/software-development" element={<Softwaredevelopment />} />  
            <Route path="/nft-development" element={<NftDevelopment />} />
          </Routes>
          <Footer />
        </div>
      </ModalProvider>
      {/* <div className="font-[Inter]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/software-development" element={<Softwaredevelopment />} />  
        </Routes>
        <Footer />
      </div> */}
    </Router>
  );
}

export default App;
