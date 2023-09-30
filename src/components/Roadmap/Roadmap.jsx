import React from "react";
import classes from "./styles.module.css";
import roadmap from "../img/roadmap.svg";
import telegram from "../img/telegram.png"
import mobile from "../img/mobile.png"

const Roadmap = () => {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.topBody}>
          <h2>END TO END ENCRYPTED</h2>
          <div className={classes.heading}>ROAD MAP</div>
          <p className={classes.para}>
            Introducing the Secure Message feature allowing users of Web 3.0 to
            send secure, decentralized, and encrypted messages to anyone
            anonymously in TG community.
          </p>
        </div>
        <div className={classes.img_div}>
          <img className={classes.roadmapImg} src={roadmap} alt="roadmap" height={1400} />
        </div>
      </div>
      <div className={classes.mobile_app}>
        <div className={classes.mobile_box}>
          <div className={classes.mobile_left}>
            <h2>GET GOING WITH THE GAIG</h2>
            <h1>AI IN YOUR POCKET</h1>
            <p>
              Get your hands on the GPT Guru AI phone application available for
              Android.
            </p>
            <img src={telegram} alt="telegram" className={classes.telegram}/>
          </div>
          <div>
            <img src={mobile} className={classes.mobile_img} alt="mobile-img" height={400} />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Roadmap;
