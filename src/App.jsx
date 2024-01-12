import { BrowserRouter } from "react-router-dom";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import { background } from './assets';
import { About, Skills, Contact, Experiences, Hero, Navbar, Projects, StarsCanvas } from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      <MouseParallaxContainer globalFactorX={0.2} globalFactorY={0.2}>
        <MouseParallaxChild factorX={0.4} factorY={0.2}>
          <img className='absolute right-5' src={background} alt="Background image block" />
        </MouseParallaxChild>
          <Navbar />
          <Hero />
      </MouseParallaxContainer>
        <About />
        <Projects />
        <Skills />
        <Experiences />
      </div>
    </BrowserRouter>
  );
}

export default App;
