import Logo from "./Logo";
import {Link} from"react-router-dom"

const Footer=()=>{
    return<footer>
        <div className="footer__cell">
            
           
        
        <div className="footer__cell footer__menu">
            <Link to="/catalog">Каталог</Link>
            <Link to="/favorites">избранное</Link>
            <Link to="">Корзина</Link>
             <div>©{new Date().getFullYear()}</div>
        </div>
        <Logo/>
        <div className="footer__info">
            <h2>Мы на связи</h2>
            <p>+7(999)999 99 99</p>
           <Link to="/draft"><p>RockDog@mail.com</p></Link>
        </div>
        </div>
    </footer>
}
export default Footer;
