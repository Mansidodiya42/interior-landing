import "./App.css";
import Header from "./components/Header/Header";
import Wemake from "./components/Section/Wemake";
import Creative from "./components/Section/Creative";
import Portfolio from "./components/Section/Portfolio";
import Testimonials from "./components/Section/Testimonials";
import HappyClients from "./components/Section/HappyClients";
import Satisfied from "./components/Section/Satisfied";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Wemake />
      <Creative />
      <Portfolio />
      <Testimonials />
      <HappyClients />
      <Satisfied />
      <Footer />
    </div>
  );
}

export default App;
