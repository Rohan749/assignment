import React from 'react'
import classes from "./styles.module.css"

const ButtonGold = (props) => {
  return (
    <>
    <button className={classes.gold_btn}>
        {props.children}
    </button>
    </>
  )
}

export default ButtonGold