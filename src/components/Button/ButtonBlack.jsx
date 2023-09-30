import React from 'react'
import classes from "./styles.module.css"

const ButtonBlack = (props) => {
  return (
    <button className={classes.black_btn}>
        {props.children}
    </button>
  )
}

export default ButtonBlack