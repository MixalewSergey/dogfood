import { useState } from "react";

import Card from "../components/Card";
import cardsData from "../assets/data.json";// data.json
import PromoBig from "../components/Promo/PromoBig/PromoBig";
import PromoSmall from "../components/Promo/PromoSmall/PromoSmall";



const Draft=()=>{
    const [goods, setGoods] = useState(cardsData);
    return(
        <>
        <PromoBig/> 
         <div className="container">
                { /* <Card
               //   img={cardsData[0].pictures}
               //   name={cardsData[0].name}
               //   price={cardsData[0].price}
                //   />
    */}
                

                {goods.map((el, i) => <Card
                    key={i}
                    img={el.pictures}
                    name={el.name}
                    price={el.price}
                />)}
                {/* {adds.map((el,i) => <Promo key ={i} {...el} type={el.size} />)} */}
            </div>
            <PromoSmall/>
            </>
    )
}

export default Draft;