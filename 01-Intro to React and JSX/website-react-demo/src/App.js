/*eslint-disable*/

import { HeroSection } from "./components/HeroSection";
import { About } from "./components/About";
import { Service } from "./components/Service";
import { Portfolio } from "./components/Portfolio";
import { News } from "./components/News";
import { Subscribe } from './components/Subscribe';
import { Footer } from "./components/Footer";
import { Client } from "./components/Client";
import { Contact } from "./components/Contact";
import { Info } from "./components/Info";


function App() {
  return (
    <div >
      <HeroSection />
      <About />
      <Service />
      <Portfolio />
      <News />
      <Subscribe />
      <Footer />
      <Client />
      <Contact />
      <Info />
    </div>
  );
}

export default App;
