import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/Navbar/Navbar";
import Footer from "./shared/Footer/Footer";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import VideoTour from "./pages/VideoTour/VideoTour";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import GetInTouch from "./component/GetInTouch/GetInTouch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/solus-real-estate/" element={<Home />} />
          <Route
            exact
            path="/solus-real-estate/gallery"
            element={<Gallery />}
          />
          <Route
            exact
            path="/solus-real-estate/videroTour"
            element={<VideoTour />}
          />
          <Route
            exact
            path="/solus-real-estate/contact"
            element={<Contact />}
          />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
        <GetInTouch />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
