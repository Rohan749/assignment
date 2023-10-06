import React from "react";
import classes from "./styles.module.css";

const Mapbox = ({roadmap}) => {
  return (
    <div className={classes.mapbox}>
      <div className={classes.mapbox_phase}>
        <div className={classes.phase}>{roadmap.phase}</div>
        <div className={classes.phase_type}>Marketing</div>
      </div>

      <div className={classes.phase_desc}>
        {roadmap.heading}
      </div>

      <div className={classes.phase_para}>
        {roadmap.description}
      </div>
    </div>
  );
};

export default Mapbox;
