import React, { useEffect } from "react";
import classes from "./styles.module.css";
import ButtonGold from "../Button/ButtonGold";
import ButtonBlack from "../Button/ButtonBlack";
import robo from "../img/robo.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ellipse from "../img/ellipse1.png"
import ellipse3 from "../img/ellipse3.png"
import group from "../img/Group 1.png"

const BaseBody = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className={classes.base_body}>
      <img src={ellipse} className={classes.ellipse1}/>
      <img src={ellipse3} className={classes.ellipse3}/>
      <img src={group} className={classes.group}/>
      
      <div className={classes.body_left}>
        <div data-aos="fade" data-aos-delay="300" className={classes.body_heading}>
          Unlocking the Full Potential Of Daos with Artificial Intelligence{" "}
        </div>
        <div data-aos="fade" data-aos-delay="400" className={classes.body_para}>
          Empower DeFi Governance with AI-Powered Decisions
        </div>
        <div data-aos="fade" data-aos-delay="500" className={classes.baseBody_btns}>
          <ButtonGold>Try DAIG</ButtonGold>
          <ButtonBlack>White Paper</ButtonBlack>
        </div>
        <div data-aos="fade" data-aos-delay="600" className={classes.overView}>
          <div className="h3">OVERVIEW</div>
          <div className={classes.overView_types}>
            <div>AI DRIVEN PROPOSAL <br/> ANALYSIS</div>
            <div>PROPOSAL RANKING</div>
          </div>
          <div className={classes.overView_types}>
            <div>TOKEN BASED <br/> VOTING</div>
            <div>VOTING RECOMMENDATIONS</div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="300" className={classes.body_right}>
        <img height={800} className={classes.robo} src={robo} alt="robot-img"/>
      </div>
    </div>
  );
};

export default BaseBody;
