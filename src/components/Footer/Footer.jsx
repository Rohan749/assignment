import React from "react";
import classes from "./styles.module.css";
import daig from "../img/DAIG.svg";
import logo from "../img/logo.svg";
import youtube from "../img/youtube.png"
import instagram  from "../img/Instagram.png"
import telegram from "../img/Telegram.png"
import discord from "../img/Discord.png"

const Footer = () => {
  return (
    <div className={classes.body}>
      <div className={classes.upper_footer}>
        <div>
          <div className={classes.left_body}>
            <img src={daig} className={classes.daig} />
            <img src={logo} className={classes.logo} />
          </div>
          <div className={classes.heading}>Sign up to our NewsLetter</div>
          <div className={classes.input}>
            <input
              placeholder="rohanpandey749@gmail.com"
              className={classes.inputField}
            />
            <button className={classes.btn}>Sign up</button>
            <div className={classes.queries}>
              For contact and queries, please contact@TGbot.io
            </div>
          </div>
        </div>
        <div className={classes.right_body}>
          <div>
            <h4>TG-GPT Bots</h4>
            <nav>White paper</nav>
            <nav>Media Kit</nav>
            <nav>Privacy Policy</nav>
          </div>

          <div>
            <h4>INVESTORS</h4>
            <nav>Pitch Desk</nav>
            <nav>Contact Us</nav>
          </div>

          <div>
            <h4>PRICING</h4>
            <nav>Stake $GPTG</nav>
            <nav>TG Bot AI Experience</nav>
          </div>
        </div>
      </div>
      <p className={classes.para}>
        TG-GPT Bots is a next-generation blockchain AI tool empowering Web 3.0
        communities fuelling their creativity and productivity like never before
        !🤖👨‍💻
      </p>

      <div className={classes.links}>
        <a>
            <img src={discord} alt="discord"/>
        </a>
        <a>
            <img src={telegram} alt="telegram"/>
        </a>
        <a>
            <img src={youtube} alt="youtube"/>
        </a>
        <a>
            <img src={instagram} alt="instagram"/>
        </a>
      </div>
      <div className={classes.copyright}>
      Copyrights © 2023. TG-GPT Bots OÜ.All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
