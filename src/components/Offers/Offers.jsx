import React from "react"
import "./Offers.css"
import exclusive_image from "../Assets/exclusive_image.png"
const Offers=()=>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>EXCLUSIVE </h1>
                 <h1>OFFERS FOR YOU !!!</h1>
            
                <p>ONLY ON BEST SELLER PRODUCT</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img className="resize" src={exclusive_image} alt="" />
            </div>
        </div>
    )
}
export default Offers;