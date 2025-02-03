import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

import './App.css';

function App() {
  return (
    <div className= "appContainer">
      <Header />
      <Hero />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
