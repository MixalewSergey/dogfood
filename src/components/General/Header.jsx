import Logo from "./Logo";

const Header=({user})=>{
    return(<header>
        <Logo/>
        <div className="search"></div>
        <nav className="header__menu">
            {/**Если пользователь === true */ }
            { user &&<div>
           <a href="">Избранное</a>
            <a href="">Корзина</a>
            <a href="">Профиль</a>
            <a href="">Выйти</a>
            </div>}
            <a href="">Войти</a>
        </nav>
    </header>)
}

export default Header;