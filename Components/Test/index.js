import React from 'react'
import { useState } from 'react'
import './index.css'

function Test(){
    const [subscribed, setSubscribed] = useState(false)

    const onSubscribe=()=>{
        setSubscribed(!subscribed)
    }

    const getBtnText=()=>{
        return subscribed?"Subscribed":"Subscribe"
    }

    return(
        <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="title">Thank you! Happy Learning</p>
        <button type="button" className="btn" onClick={onSubscribe}>
          {getBtnText()}
        </button>
      </div>
    )
}
export default Test