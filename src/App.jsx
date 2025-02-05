import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/banner/Banner';
import Carousel from "./components/Carousel";
import Informacoes from './components/Informacoes/Informacoes';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Carousel />
      <Informacoes />
      <Depoimentos />
      <Footer />
    </>
  );
}

export default App;
