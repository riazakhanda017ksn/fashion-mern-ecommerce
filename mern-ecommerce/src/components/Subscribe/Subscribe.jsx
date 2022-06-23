import React from "react";
import videoOne from "../../video/subscribe.mp4";
import SendIcon from "@mui/icons-material/Send";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <>
      <div className="video-section">
        <video src={videoOne} muted loop autoPlay></video>
        <div className="white-overly">
          <div className="form-section">
            <h1>Subscribe our website and Become a member of our website</h1>
            <form action="">
              <div className="form">
                <input type="email" placeholder="email" required />
                <button>
                  <SendIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
