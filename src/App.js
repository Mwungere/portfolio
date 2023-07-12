import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Porfolio";
import SocialLinks from "./components/SocialLinks";

function App() {

   return (
     <div className=" flex flex-col">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
     </div>
   )
}

export default App;
