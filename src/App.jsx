import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Marquee/Marquee";
import Development from "./components/Development/Development";
import Formation from "./components/Formation/Formation";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Marquee />
      <Development />
      <Formation />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App
