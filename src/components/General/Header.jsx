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

const Header=({user, setModalActive})=>{
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
            <Link to="" title="Избранное"><BagHeart/></Link>
            <Link to="" title="Корзина"><Cart4/></Link>
            <Link to="/Profile" title="Профиль"><PersonSquare/></Link>
            
              
            </>}
           {!user && <Link to="" onClick={logIn} title="Войти"><BoxArrowInRight/></Link>}
        </nav>
    </header>)
}

export default Header;