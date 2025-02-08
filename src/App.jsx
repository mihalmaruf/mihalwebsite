import { BrowserRouter } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

const App = () => {
  return (
    <BrowserRouter>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Services />
        <Projects />
        <Collaboration />
        <Footer />
      </div>

      <ButtonGradient />
    </BrowserRouter>
  );
};

export default App;
