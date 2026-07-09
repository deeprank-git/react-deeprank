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
import TsamuelCaseStudy from "./pages/TsamuelCaseStudy";
import AmishaHealing from "./pages/AmishaHealing";
import Yogalife from "./pages/Yogalife";
import GubeLuxe from "./pages/GubeLuxe";

import LumaniSystem from "./pages/LumaniSystem";
import AisUtilities from "./pages/AisUtilities";
import Exademy from "./pages/Exademy";
import DRRYN from "./pages/DRRYN";
import RewariHandicrafts from "./pages/RewariHandicrafts";
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
        <div className="font-[Rajdhani]">
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
      
           <Route
  path="/case-study/tsamuel-estate"
  element={<TsamuelCaseStudy />}
/>
            <Route
  path="/case-study/amisha-healing"
  element={<AmishaHealing />}
/>
 <Route
  path="/case-study/yogalife"
  element={<Yogalife />}
/>
<Route
  path="/case-study/gubeluxe"
  element={<GubeLuxe />}
/>
<Route
  path="/case-study/lumani-systems"
  element={<LumaniSystem />}
/>
<Route
  path="/case-study/ais-utilities"
  element={<AisUtilities/>}
/>
<Route
  path="/case-study/exademy"
  element={<Exademy />}
/>
<Route
  path="/case-study/drryn"
  element={<DRRYN />}
/>
<Route
  path="/case-study/rewari-handicrafts"
  element={<RewariHandicrafts />}
/>
          </Routes>
          <Footer />
        </div>
      </ModalProvider>
      {/* <div className="font-[Rajdhani]">
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
