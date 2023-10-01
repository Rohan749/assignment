import React from "react";
import classes from "./styles.module.css";
import daig from "../img/DAIG.svg";
import logo from "../img/logo.svg";
import ButtonGold from "../Button/ButtonGold";
import ham from "../img/ham.png";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.left_nav}>
          <img src={daig} className={classes.daig} />
          <img src={logo} className={classes.logo} />
        </div>
        <div className={classes.mid_nav}>
        <div>
            <a href="#">Features</a>
          </div>
          <div>
          <a href="#">Whitepaper</a>
          </div>
          <div>
          <a href="#">Staking</a>
          </div>
          <div>
          <a href="#">TG-GPT App</a>
          </div>
        </div>
        <div className={classes.right_nav}>
          <ButtonGold>Connect Wallet</ButtonGold>
        </div>
        <div
          className={classes.hamburger}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={ham} alt="menu" />
        </div>
      </div>
      {open && (
        <div data-aos="fade-down" className={classes.hamOptions}>
          <div>
            <a href="#">Features</a>
          </div>
          <div>
          <a href="#">Whitepaper</a>
          </div>
          <div>
          <a href="#">Staking</a>
          </div>
          <div>
          <a href="#">TG-GPT App</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
