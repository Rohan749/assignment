import React from "react";
import classes from "./styles.module.css";

const Mapbox = () => {
  return (
    <div className={classes.mapbox}>
      <div className={classes.mapbox_phase}>
        <div className={classes.phase}>Phase 1</div>
        <div className={classes.phase_type}>Marketing</div>
      </div>

      <div className={classes.phase_desc}>
        Marketing Website and whitepaper launch
      </div>

      <div className={classes.phase_para}>
        In the first phase we will be launching the marketing website and our
        whitepaper which will help users understand our vision.
      </div>
    </div>
  );
};

export default Mapbox;
