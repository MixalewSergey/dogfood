import Logo from "./Logo";

const Header=({user, setUser,setModalActive})=>{
    const logOut=(e)=>{
        e.preventDefault();
        setUser("");//значение false  setUser("null");setUser();setUser("rockUser");
        localStorage.removeItem("rockUser");
    }
    const logIn=(e)=>{
        e.preventDefault();
        // setUser("rockUser");
         //localStorage.setItem("rockUser","lk-band");
        setModalActive(true);
    }
    return(<header>
        <Logo/>
        <div className="slogan">Натуральное питание для вашего питомца</div>
        <div className="search"></div>
        <nav className="header__menu">
            {/**Если пользователь === true (если слева тру то отображает то что справа после &&)*/ }
            { user &&<>{/**(<></>)- реакт фрагмент, оставляет целостность но не учитывается при генерации  (самоизчезающийся пакет для продуктов) */}
           <a href="">Избранное</a>
            <a href="">Корзина</a>
            <a href="">Профиль</a>
            <a href=""onClick={logOut}>Выйти</a>
            </>}
           {!user && <a href=""onClick={logIn}>Войти</a>}
        </nav>
    </header>)
}

export default Header;