import React from "react";
import classes from "./styles.module.css";
import roadmap from "../img/roadmap.svg";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dot from "../img/dot.png";
import line1 from "../img/Line 3.png";
import line2 from "../img/Line 6.png";
import line3 from "../img/Line 7.png";
import Mapbox from "./Mapbox";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Roadmap = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  let roadmap = [
    {
      phase: "Phase 1",
      heading: "Marketing Website and whitepaper launch",
      description:
        "In the first phase we will be launching the marketing website and our whitepaper which will help users understand our vision.",
    },
    {
      phase: "Phase 2",
      heading: "Mobile numbers launch 1",
      description:
        "First lot of numbers will be launched and will be claimable from the website.",
    },
    {
      phase: "Phase 3",
      heading: "Mobile numbers launch 2",
      description:
      "Second lot of numbers will be launched and will be claimable from the website."
    },
    {
      phase: "Phase 4",
      heading: "Calling, Messaging using telphone number launch",
      description:
        "At this phase we will launch the feature using which you can message/call others using their telphone number.",
    },
    {
      phase: "Phase 5",
      heading: "Other utilties launch",
      description:
        "Loging with telphone, video calling, OTP verification and all the other mobile number related utlities will be launched in this phase.",
    },
  ];

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
        <div className={classes.map_cover}>
          <div className={classes.map_div}>
            <Mapbox roadmap={roadmap[0]}/>
            <Mapbox roadmap={roadmap[1]}/>
            <Mapbox roadmap={roadmap[2]}/>
            <Mapbox roadmap={roadmap[3]}/>
            <Mapbox roadmap={roadmap[4]}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
