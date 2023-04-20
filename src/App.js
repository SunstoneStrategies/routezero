import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
// import Banner from "./components/Banner/Banner";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import Clients from "./components/Clients/Clients"; 
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";

import UsMap from "./components/Map/UsMap";


function App() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      
      <Header />
      <Slider />
      <Banner/>
      <UsMap />
      <Clients />
      <Footer/>
      
     
    </div>
  );
}

export default App;
