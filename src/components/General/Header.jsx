import Logo from "./Logo";
import { Link } from "react-router-dom";
import {
    Folder2,
    BagHeart,
    Cart4,
    PersonSquare,
    BoxArrowInRight,
    PlusSquare
   } from "react-bootstrap-icons"
   import { useNavigate } from "react-router-dom";
   import { useState, useEffect, useContext} from "react";
   import Ctx from "../../context";
   import Search from "../Search";

   
const Header=({user, setModalActive, serverGoods})=>{
    const {goods, setGoods, basket} = useContext(Ctx);
    const [likeCnt, setLikeCnt] = useState(0);
    const [cartCnt, setCartCnt] = useState(0);
    useEffect(()=>{
        //фильтруем только те товары у которых в лайках есть id 
        //нашего пользователя- id берем из ls  ибо забыли про него (передать)
       setLikeCnt(serverGoods.filter(el=>el.likes.includes(
        localStorage.getItem("rockId"))).length)
    },[serverGoods]);

    useEffect(()=>{
        let cnt = 0 ;
        for(let i = 0 ; i<basket.length; i++){
            cnt+=basket[i].cnt
        }
       setCartCnt(cnt)
       //setCartCnt(basket.reduce((acc,el)=>acc+el.cnt, 0))-другая вариация кода
    },[basket])

    const navigateLog= useNavigate();
    
    const logIn=(e)=>{
        e.preventDefault();
        // setUser("rockUser");
         //localStorage.setItem("rockUser","lk-band");
        setModalActive(true);
        navigateLog("/profile")

    }
    return(<header>
        <Logo/>
        
       <span style={{textAlign:"center"}}> <Search arr={serverGoods} /></span>
        <nav className="myheader__menu">
            {/**Если пользователь === true (если слева тру то отображает то что справа после &&)*/ }
            { user &&<>{/**(<></>)- реакт фрагмент, оставляет целостность но не учитывается при генерации  (самоизчезающийся пакет для продуктов) */}
           <Link to="/add" title="Добавить товар" className="badge-el"><PlusSquare/></Link>
            <Link to="/catalog" title="Каталог"><Folder2/></Link>
            <Link to="/favorites" title="Избранное" className="badge-el"><BagHeart/>
         {likeCnt > 0 && <span className="badge-item"> {likeCnt}</span>}</Link>
            <Link to="/basket" title="Корзина" className="badge-el"><Cart4/>
            {cartCnt > 0 && <span className="badge-item"> {cartCnt}</span>}</Link>
            <Link to="/Profile" title="Профиль"><PersonSquare/></Link>
            
              
            </>}
           {!user && <Link to="" onClick={logIn} title="Войти"><BoxArrowInRight/></Link>}
        </nav>
    </header>)
}

export default Header;