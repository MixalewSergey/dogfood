import {useState} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {ArrowThroughHeart, ArrowThroughHeartFill, Percent} from "react-bootstrap-icons"

//{img, name, price}=>(props.img, prop.name, props.price)
const Card = ({img, name, price,_id, discount,tags, likes, setServerGoods}) => {
    //проверка , есть ли id пользователя в массиве с лайками товара 
    const [isLike, setIsLike] = useState(likes.includes(localStorage.getItem("rockId")));
    
    const updLike=(e)=>{
     e.stopPropagation();
     e.preventDefault();
     setIsLike(!isLike);
     const token = localStorage.getItem("rockToken");
     fetch(`https://api.react-learning.ru/products/likes/${_id}`,{
        method: isLike ? "DELETE" : "PUT",
        headers:{
            "Authorization" : `Bearer ${token}`
        }
     })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
    //изменить основной массив с товарами внутре Reack (на стороне клиента)
    // если внутри функции set...(useState)находиться callback
    // то его оргументом являеться старое состояние (то что было до изменения)
    // в нашем случае мы назвали его "old"
    //callback обязательно должен вернуть новые данные
    setServerGoods(function(old){
        // console.log(old);
        //Нам надо из массива взять одну карточку и заменить её
        //при этом положение карточки не должно поменяться
        //Лучший способ пройтись по массиву и изменить 
        //часть его это метод "map"
        const arr=old.map(el=>{
            // для каждого элемента массива с товарами
            if(el._id===_id){//если _id являеться тем же что и у измененного товара
                return data; // то я заменяю товар в общем массиве на обновленный
            }else{// иначе
                return el;//ничего не делаю 
            }
        });
        return arr;//возвращаю новый массив
    })
        })
    }
   
   return (<Link className="mycard" to={`/product/${_id}`}>
    {discount>0 && <span className="mycard__discount">{discount}<Percent/></span>}
    <span className="mycard__like" onClick={updLike}>
        {isLike ? <ArrowThroughHeartFill/> : <ArrowThroughHeart/>}</span>
    <img src={img} alt="Картинка" className="mycard__img"/>
    <span className="mycard__name">{name}</span>
    <span className="mycard__price">
        {discount > 0
        ?<>
        <del>{price}</del>
        &nbsp;
        {price*(100-discount)/100}
        </>
        :price 
        } 
    ₽</span>
    <button className="mycard__btn">В корзину</button>
    {/* <span className="card__tags">{tags.map(e=><span key={e }>{e} </span>)}</span> */}
</Link>)
}

export default Card;