import React from 'react'
import classes from "./styles.module.css"
import daig from "../img/DAIG.svg"
import logo from "../img/logo.svg"
import ButtonGold from '../Button/ButtonGold'
import ham from "../img/ham.png"

const Navbar = () => {
  return (
    <div className={classes.navbar}>
        <div className={classes.left_nav}>
            <img src={daig} className={classes.daig} />
            <img src={logo} className={classes.logo}/>
        </div>
        <div className={classes.mid_nav}>
            <div>Features</div>
            <div>Whitepaper</div>
            <div>Staking</div>
            <div>TG-GPT App</div>
        </div>
        <div className={classes.right_nav}>
            <ButtonGold>Connect Wallet</ButtonGold>
        </div>
        <div className={classes.hamburger}>
          <img src={ham} alt='menu'/>
        </div>
    </div>
  )
}

export default Navbar