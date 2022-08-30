import React from 'react'


// Gif
import loader from "../../gif/spinner.gif";

const Loader = () => {
  return (
    <div>
        <img src={loader} alt="loader" />
        <h1 style={{textAlign:"center"}}> چند لحظه صبر کنید ...</h1>
    </div>
  )
}

export default Loader;