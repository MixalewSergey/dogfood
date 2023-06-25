import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";


import Loader from "../components/Loader";

const Product=()=>{
    const [product, setProuct]= useState({});
    const {id}= useParams();

    useEffect(()=>{
        fetch(`https://api.react-learning.ru/products/${id}`,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("rockToken")}`
            }
        })
        .then(res=>res.json())
        .then(data=> {
            if(!data.err){
            // console.log(data);
        setProuct(data)
           }
        })
    },[]);
//  console.log(product.discount)//
    //  product?.name - синонемы -product && product.name
    return<>
   
    {product.name
    ?<div className="base"><div className="product">
    <h1>{product.name}&nbsp;&nbsp;&nbsp;{product.discount > 0 &&<mark style={{background:"lime",
     borderRadius:"35% 0%"}}>&nbsp; Акция - {product.discount}%&nbsp;</mark>} </h1>
    <img src={product.pictures } alt={product.name}/>
   <h2 style={{ color: 'black' }}>{product.description}</h2>
    <mark style={{fontSize:"22px"}}>{product.discount > 0
        ?<>
        <del>{product.price}</del>
        &nbsp;&nbsp;
        <b>{product.price*(100-product.discount)/100}</b>
        </>
        :product.price 
        } ₽</mark>
   <div>
   <p style={{ color: 'black' }}>{product.reviews[0]?.text}</p>
    </div>
    </div>
    </div>
      :  <Loader/>
      }



    {/* <h1>{product.name ? product.name : "страница 1 товара"}</h1>
    {product.pictures && <img src={product.pictures } alt={product.name} />}
    {product.price &&<mark>{product.price}₽</mark>} */}
    </>
}

export default Product 