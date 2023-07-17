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
import TwitterTag from "./components/TwitterTag/TwitterTag";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <TwitterTag />
      <Banner />
      <UsMap />
      <Clients />

      <Footer />
    </>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import GalleryPage from "./components/Map/GalleryPage";
// import Header from "./components/Header/Header";
// import Slider from "./components/Slider/Slider";
// import Clients from "./components/Clients/Clients";
// import Footer from "./components/Footer/Footer";
// import Banner from "./components/Banner/Banner";
// import UsMap from "./components/Map/UsMap";
// import "./App.css";

// function App() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const apiKey = "b607512f40314cc39e77cff9da4f28a7";
//         const response = await fetch(
//           `https://newsapi.org/v2/everything?q=tesla&from=2023-06-05&sortBy=publishedAt&apiKey=${apiKey}`
//         );
//         const data = await response.json();
//         setPosts(data.articles);
//       } catch (error) {
//         console.log("Error fetching news:", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <BrowserRouter>
//       <div className="ticker-wrapper">
//         <div className="ticker">
//           <ul className="ticker-list">
//             {posts.map((post, index) => (
//               <li className="ticker-item" key={index}>
//                 {post.title}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <Header />
//       <Slider />
//       <Banner />
//       <UsMap />
//       <Clients />

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
