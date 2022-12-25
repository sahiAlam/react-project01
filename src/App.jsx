import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components 
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// CSS files Imported
import "../src/styles/App.scss";
import "../src/styles/header.scss";
import "../src/styles/home.scss";
import "../src/styles/contact.scss";
import "../src/styles/footer.scss";
import "../src/styles/mediaquery.scss";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;