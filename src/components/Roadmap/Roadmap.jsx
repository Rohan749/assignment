import React from "react";
import classes from "./styles.module.css";
import roadmap from "../img/roadmap.svg";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dot from "../img/dot.png"
import line1 from "../img/Line 3.png"
import line2 from "../img/Line 6.png"
import line3 from "../img/Line 7.png"
import Mapbox from "./Mapbox";

const Roadmap = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
        <img src={dot} className={classes.dot}/>
          <div className={classes.map_div}>
            <Mapbox />
            <Mapbox />
          </div>
          <div className={classes.map_div}>
            <Mapbox />
            <Mapbox />
        </div>
        <div className={classes.map_div}>
            <Mapbox />
        </div>
      </div>
    </>
  );
};

export default Roadmap;
