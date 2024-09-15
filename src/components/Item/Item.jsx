import React from "react";
import "./Item.css"

const Item= (props) => {
    return (
     <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-new-prices">
          ${props.newprice  }
        </div>
        <div className="item-old-prices">
            ${props.oldprice}
        </div>
      </div>
     </div>
    )
}
export default Item;