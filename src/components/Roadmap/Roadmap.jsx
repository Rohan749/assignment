import React from "react";
import classes from "./styles.module.css";
import roadmap from "../img/roadmap.svg";
import telegram from "../img/telegram.png"
import mobile from "../img/mobile.png"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Roadmap = () => {

  useEffect(() => {
    AOS.init();
  }, [])

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
        <div data-aos="fade-up" className={classes.mobile_box}>
          <div data-aos="fade-up" data-aos-delay="300" className={classes.mobile_left}>
            <h2>GET GOING WITH THE GAIG</h2>
            <div>AI IN YOUR POCKET</div>
            <p>
              Get your hands on the GPT Guru AI phone application available for
              Android.
            </p>
            <img src={telegram} alt="telegram" className={classes.telegram}/>
          </div>
          <div data-aos="fade-right" data-aos-delay="600" className={classes.mobile_div}>
            <img src={mobile} className={classes.mobile_img} alt="mobile-img" height={400} />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Roadmap;
