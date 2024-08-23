import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import Products from "./components/ProductsCard/Products";
import Banner from "./components/Banner/Banner";
import AppStore from "./components/AppStore/AppStore";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });

  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Products />
        <Banner />
        <AppStore />
      </div>
    </>
  );
}

export default App;
