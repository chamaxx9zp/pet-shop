import React from 'react'
import { Button } from "react-bootstrap";
import styles from './ButtonHoverBrown.module.scss'

function ButtonHoverBrown({text=""}) {
  return (
    <div>
    <Button variant="primary" className={styles['button-custom']} onClick={() => console.log("Shop Now")}>
      {text}
    </Button>
  </div>
  )
}

export default ButtonHoverBrown;