import React from "react"
import "./Newsletter.css"
const Newsletter=()=>{
   return (<div className="newsletter">
    <h1>Get Exclusive Offers On Your Mail Id</h1>
    <p>Subsceribe Our newsteller ans stay updated!!</p>
    <div>
        <input type="email" placeholder="Your Mail-id" />
        <button>Subscribe</button>
    </div>
    </div>)
}
export default Newsletter;