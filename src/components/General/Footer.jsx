import Logo from "./Logo";

const Footer=()=>{
    return<footer>
        <div className="footer__cell">
            
           
        
        <div className="footer__cell footer__menu">
            <a href="">Каталог</a>
            <a href="">избранное</a>
            <a href="">Корзина</a>
             <div>©{new Date().getFullYear()}</div>
        </div>
        <Logo/>
        <div className="footer__info">
            <h2>Мы на связи</h2>
            <p>+7(999)999 99 99</p>
            <p>RockDog@mail.com</p>
        </div>
        </div>
    </footer>
}
export default Footer;
