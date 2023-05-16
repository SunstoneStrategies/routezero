import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalleryPage from "./components/Map/GalleryPage";
import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import UsMap from "./components/Map/UsMap";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Banner />
      <UsMap />
      <Clients />

      <Footer />
    </>
  );
}

export default App;
