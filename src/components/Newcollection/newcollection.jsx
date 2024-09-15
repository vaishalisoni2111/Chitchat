import React from "react"
import "./Newcollection.css"
import new_collection from"../Assets/new_collections"
import Item from "../Item/Item"

const Newcollection =()=>{
    return(
        <div className="new-collection">
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collection">
             {new_collection.map((item,i)=>{
                return <Item key={i} 
                id={item.id}
                name={item.name}
                image={item.image}
                newprice={item.new_price}
                oldprice={item.old_price}/> 
             })}
            </div>
        </div>
    )
}
export default Newcollection