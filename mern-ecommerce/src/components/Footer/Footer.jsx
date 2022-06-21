/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";
import EditLocationOutlinedIcon from "@mui/icons-material/EditLocationOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="about-site">
          <h4>About The Store</h4>
          <p>
            We are design and product obsessed. Uncompromising in the style,
            quality and performance of every product we create.
          </p>
          <p>
            This is a demonstration of the Symmetry theme for UI/UX. Essentials,
            Outerwear & Activewear kindly donated by Varley
          </p>
        </div>

        <div className="customer-service-n-social-icon">
          <h4>Customer Support</h4>
          <ul>
            <li>
              <Link to="/services">Customer Service</Link>
            </li>
            <li>
              <Link to="/products">product</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/login">Email Signup</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="customer-service-n-social-icon">
          <div className="about-site">
            <h4>Address</h4>
            <ul>
              <li>
                <Link to="/">
                  <EditLocationOutlinedIcon />
                  Dhaka Bangladesh
                </Link>
              </li>
              <li>
                <a
                  href="https://goo.gl/maps/65dDBsL52BM2CpEE9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapOutlinedIcon />
                  map
                </a>
              </li>
              <li>
                <a
                  href="https://it-z-riaz-site.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PublicIcon /> website
                </a>
              </li>
            </ul>
            <div className="social-div">
              <p>
                Follow me on <ArrowRightAltOutlinedIcon />
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/nisshongojiboner.pothik/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/riazahmedakhanda/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://riazahmedakhanda.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PublicIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center footer-last-caption">
        <p>
          @all right reserved{" "}
          <a
            href="https://riazahmedakhanda.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Riaz
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
