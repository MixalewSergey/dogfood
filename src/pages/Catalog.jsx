import { useState, useContext} from "react";

import Card from "../components/Card";
import Pagination from "../components/Pagination";

import Ctx from "../context";

const Catalog=({setServerGoods})=>{
    const {goods} = useContext(Ctx)
    const [sort, setSort] = useState(null)
    
    const sortHandler=(vector)=>{
        if(vector===sort){
            setSort(null)
            goods.sort((a, b) => a.name.localeCompare(b.name))
            // setServerGoods(old=>[...old])
            // goods.sort((a, b)=>new Date(a.created_at).getTime()
            // - new Date(b.created_at).getTime());
            // console.log(goods)
        }else{
            setSort(vector)
            goods.sort((a, b)=>{
                return vector === "up" ?(a.price - b.price) :
                (b.price - a.price)
            })
        }
    }
    
    
    return<div className="container">
        <div className="pagination__div"><Pagination/></div>
        <div  className="containerBtn">
            {/* Сортировка по числу price (без скидки) */}
        <button style={{borderRadius: "8px", background: sort ==="up" ? "lime" : "white"}}
        onClick={()=>sortHandler("up")}
        >По возрастанию цены</button>
        <button style={{borderRadius: "8px",background: sort ==="down" ? "lime" : "white"}}
        onClick={()=>sortHandler("down")}
        >по убыванию цены</button>
             {/* Фильтрация */}
        {/* <button>Новинки</button>
        <button>Скидки</button> */}
        
        </div>
    {goods.map(g=><Card key={g._id} {...g} img={g.pictures}
    setServerGoods={setServerGoods}/>)}
    </div>
}

export default Catalog;