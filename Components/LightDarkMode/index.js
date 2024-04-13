import React from 'react'
import { useState } from 'react'
import './index.css'

export default function LightDarkMode() {
    const[isBtnText, setIsBtnText] = useState(false)

  const onClickBtn = () => {
    setIsBtnText(!isBtnText)
  }

  const getBtnText = () => {
    return isBtnText ? 'Dark Mode' : 'Light Mode'
  }

  const getBackStyle = () => {
    return isBtnText ? 'light-container' : 'dark-container'
  }
  return (
    <div className="container">
        <div className={getBackStyle()}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="btn" type="button" onClick={onClickBtn}>
            {getBtnText()}
          </button>
        </div>
      </div>
  )
}
