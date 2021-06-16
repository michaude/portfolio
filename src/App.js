import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
