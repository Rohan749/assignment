import React from "react";
import classes from "./styles.module.css";
import robot from "../img/integrationRobo.svg";
import tick from "../img/tick.svg";
import ButtonGold from "../Button/ButtonGold";
import ButtonBlack from "../Button/ButtonBlack";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const IntegrationPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={classes.body}>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className={classes.body_left}
      >
        <img
          src={robot}
          className={classes.robo}
          height={550}
          alt="robot-image"
        />
      </div>
      <div data-aos="fade" data-aos-delay="400" className={classes.body_right}>
        <div className={classes.h1}>AI Integration</div>
        <div className={classes.int_para}>
          Daig integrates advanced AI, including NLP and ML, for proposal
          analysis, personalized recommendations, and adaptive learning.
        </div>
        <div className={classes.checkpoints}>
          <img src={tick} alt="->" />
          <span>Artificial Intelligence</span>
        </div>
        <div className={classes.checkpoints}>
          <img src={tick} alt="->" />
          <span>Machine Learning</span>
        </div>
        <div className={classes.checkpoints}>
          <img src={tick} alt="->" />
          <span>Natural Language Processing</span>
        </div>
        <div className={classes.buttonBox}>
          <ButtonGold>Try DIAG</ButtonGold>
          <ButtonBlack>Whitepaper</ButtonBlack>
        </div>
      </div>
    </div>
  );
};

export default IntegrationPage;
