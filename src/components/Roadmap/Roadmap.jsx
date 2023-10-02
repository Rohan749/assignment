import React from "react";
import classes from "./styles.module.css";
import roadmap from "../img/roadmap.svg";
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
      
    </>
  );
};

export default Roadmap;
