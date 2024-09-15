import React from "react";
import Hero from "../components/hero/Hero";
import Popular from"../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import Newcollection from "../components/Newcollection/newcollection";
import Newsletter from"../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Shop= ()=>{
    return(
    <div>
     <Hero />
     <Popular />
     <Offers />
     <Newcollection />
     <Newsletter />
     <Footer />
    </div>
    )
}
export default Shop;