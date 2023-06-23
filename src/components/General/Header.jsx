import Logo from "./Logo";
import { Link } from "react-router-dom";
import {
    Folder2,
    BagHeart,
    Cart4,
    PersonSquare,
    BoxArrowInRight,
   } from "react-bootstrap-icons"
   import { useNavigate } from "react-router-dom";
   import { useState, useEffect} from "react";

   
const Header=({user, setModalActive, serverGoods})=>{
    const [likeCnt, setLikeCnt] = useState(0);
    const [cartCnt, setCartCnt] = useState(0);
    useEffect(()=>{
        //фильтруем только те товары у которых в лайках есть id 
        //нашего пользователя- id берем из ls  ибо забыли про него (передать)
       setLikeCnt(serverGoods.filter(el=>el.likes.includes(
        localStorage.getItem("rockId"))).length)
    },[serverGoods]);

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
        <div className="search"></div>
        <div className="slogan">Натуральное питание для вашего питомца</div>
        <nav className="header__menu">
            {/**Если пользователь === true (если слева тру то отображает то что справа после &&)*/ }
            { user &&<>{/**(<></>)- реакт фрагмент, оставляет целостность но не учитывается при генерации  (самоизчезающийся пакет для продуктов) */}
            <Link to="/catalog" title="Каталог"><Folder2/></Link>
            <Link to="/favorites" title="Избранное" className="badge-el"><BagHeart/>
         {likeCnt > 0 && <span className="badge-item"> {likeCnt}</span>}</Link>
            <Link to="" title="Корзина" className="badge-el"><Cart4/>
            {cartCnt > 0 && <span className="badge-item"> {cartCnt}</span>}</Link>
            <Link to="/Profile" title="Профиль"><PersonSquare/></Link>
            
              
            </>}
           {!user && <Link to="" onClick={logIn} title="Войти"><BoxArrowInRight/></Link>}
        </nav>
    </header>)
}

export default Header;