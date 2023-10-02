import React from "react";
import classes from "./styles.module.css";
import subheading from "../img/subheading.svg";
import bitcoin from "../img/bitcoin.svg"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgimg from "../img/partnersbg.png"
import stroke from "../img/stroke.png"

const Partners = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className={classes.navbar}>
        <img src={bgimg} alt="" className={classes.bgimg}/>
        <div className={classes.heading}>PARTNERS</div>
        <h1 className={classes.subheading}>
          YOU CAN BE ONE
        </h1>
      </div>
      <div className={classes.partners_body}>
        <div data-aos="fade-right"  className={classes.partners_bodyleft}>
          <div className={classes.h3} >THE FUTURE IS AI</div>
          <div className={classes.subheading_gold}>Elevate Defi Governance</div>
          <h1 className={classes.daig}>Meet DAIG!</h1>
          <p>
            Daig's AI evaluates proposals for feasibility, alignment with goals,
            and risks, empowering informed voting decisions
          </p>
        </div>
        <div data-aos="fade-left" className={classes.bitcoin}>
            <img src={bitcoin} className={classes.bitcoin} alt="bitcoin-img" height={700} />
            <img src={stroke} className={classes.stroke} alt="" height={700} />
        </div>
      </div>
    </>
  );
};

export default Partners;
