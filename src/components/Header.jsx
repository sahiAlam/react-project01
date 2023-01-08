import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <nav>
        <h1> <HashLink to="/#home" className="brand_link">techystar</HashLink></h1>
        <main>
          <HashLink to={"/#home"} className="link_style">Home</HashLink>
          <Link to={"/contact"} className="link_style">Contact</Link>
          <HashLink to={"/#about"} className="link_style">About</HashLink>
          <HashLink to={"/#brands"} className="link_style">Brands</HashLink>
          <Link to={"/services"} className="link_style">Services</Link>
        </main>
      </nav>
    </>
  );
};

export default Header;