import React from "react";
import videoOne from "../../video/jjj.mp4";
import "./Subscribe.css";
import SendIcon from "@mui/icons-material/Send";
const Subscribe = () => {
  return (
    <>
      <div className="video-section">
        <video src={videoOne} muted loop autoPlay></video>
        <div className="video-of-overly">
          <h1>Subscribe our site and get regular update</h1> <br />
          <div>
            <form action="">
              <div className="subscribe__content">
                <input type="email" placeholder="Your email...." />

                <button>
                  <SendIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
        <></>
      </div>
    </>
  );
};

export default Subscribe;
