import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Articles from "./Pages/Articles/Articles";
import Discover from "./Pages/Discover/Discover";
import Instruments from "./Pages/Instruments/Instruments";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter basename="/myBlog">
    <div className="">
      <Navbar />
      <Routes>
        <Route index={true} element={<Home />} />
        <Route path="articles" element={<Articles />} />
        <Route path="discover" element={<Discover />} />
        <Route path="instruments" element={<Instruments />} />
      </Routes>
    </div>
  </BrowserRouter>
  
  );
}

export default App;
