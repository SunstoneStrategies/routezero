import "./App.css";
// import Header from "./components/Header";
import Slider from "./components/Slider/Slider";
// import Banner from "./components/Banner/Banner";
import GoogleMapComponent from "./components/GoogleMap/GoogleMapComponent";
import Clients from "./components/Clients/Clients";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardContainer = styled(Card)({
  backgroundImage: `url("https://example.com/background.jpg")`, // Replace with your background image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vh",
  minHeight: "200px", // Adjust height as needed
  color: "white",
});

function App() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <Header />
      <Slider />
      <Banner />
      <GoogleMapComponent />
      <Clients /> */}
      <Slider />
      <GoogleMapComponent />
      <Clients />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5vh",
          marginBottom: "5vh",

          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="card"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5vh",
            marginBottom: "5vh",
            flexDirection: "column",
            alignItems: "center", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor:"red", 
            width:"90%",
            height:"30vh"
           
          }}
        >
          <div>
            <p style={{ color: "grey", textAlign: "center" }}>
              Want to learn more about Route Zero and find out if we’re going to
              be cruising through a city near you?
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                style={{ backgroundColor: "#FFA800" }}
              >
                Email Us!
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer
        class="blockquote-footer"
        style={{ textAlign: "center", marginTop: "5vh", marginBottom: "15vh" }}
      >
        Route Zero Relay © 2023 . All rights reserved
      </footer>
    </div>
  );
}

export default App;
