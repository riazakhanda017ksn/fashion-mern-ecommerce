import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ReactNavbar from "overlay-navbar/dist/lib/ReactNavbar";
import "./style.css";
import "./Navbar.css";
export default function Navbar() {
  const options = {
    burgerColorHover: "#eb4034 !important",
    logoWidth: "20vmax",
    navColor1: "#000000",
    logoHoverSize: "10px",
    logoHoverColor: "#000000",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Blog",
    link4Text: "Projects",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/blog",
    link4Url: "/project",
    link1Size: "1.3vmax",
    link1Color: "black",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    profileIconUrl: "/login",
    profileIconColor: "#fff",
    link5Url: "rgba(35, 35, 35,0.8)",
    cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",
  };

  return (
    <>
      <ReactNavbar {...options} />
    </>
  );
}
