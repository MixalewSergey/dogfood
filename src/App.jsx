import { useState, useEffect } from "react";//useEffect срабатывает каждый раз при создание или пересоздание компонента!
import { Routes, Route } from "react-router-dom";

//подключение контекст
import Ctx from "./context";

//подключаем Api
import Api  from "./api";


// Кусочки кода которые используються многократно
import {Header, Footer} from "./components/General";
import Search from "./components/Search";
import Modal from "./components/Modal";
import PromoBig from "./components/Promo/PromoBig/PromoBig";
import PromoSmall from "./components/Promo/PromoSmall/PromoSmall";

// страницы-отдельный компанент со своим набором компанентов
import Draft from "./pages/Draft";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import Add from "./pages/AddProduct";
// const sizes = ["sm", "lg", "md"];
// const adds = [];

// let text = "Полёты собак в космос — серия биологических экспериментов, включавших проведение 
// исследований по возможности полётов на геофизических и космических ракетах живых существ, 
// наблюдение за поведением высокоорганизованных животных в условиях таких полётов, а также, 
// изучение сложных явлений в околоземном пространстве."
// text = text.match(/[^\s,.]+/g);
// //console.log(text);

// const rand = (n) => Math.floor(Math.random() * n);

// let n = 4;
// while (n--) {
//     adds.push({
//         text: `${text[rand(text.length)].slice(0,8)} ${text[rand(text.length)].slice(0,8)} ${text[rand(text.length)].slice(0,8)}`,
//         pic: !!Math.round(Math.random()), // !!0 => false - !!1 => true
//         size: sizes[rand(sizes.length)]
//     })
// }
//console.log(adds)

const App = () => {
    const [user, setUser] = useState(localStorage.getItem("rockUser"))
    const [token, setToken] = useState(localStorage.getItem("rockToken"))
    const [modalActive, setModalActive] = useState(false);
    const [userId, setUserId] = useState(localStorage.getItem("rockId"));
    // Поиск по сайту
    const [text, setText] = useState("");
    // Товары из БД
    const [serverGoods, setServerGoods] = useState([]);
    // Товары для поиска и фильтрации
    const [goods, setGoods] = useState(serverGoods);

    const [api, setApi] = useState(new Api(token))
    
    useEffect(()=>{
        setApi(new Api(token));
     }, [token])

     useEffect(()=>{
        if(api.token){
            api.getProduct()
            .then(data=>{
                // console.log(data)
               setServerGoods(data.products.sort((a, b) =>
                a.name.localeCompare(b.name)))})
        }
     },[api.token])

     useEffect(()=>{
        if(!goods.length){
        setGoods(serverGoods);
        }
     },[serverGoods]);

    useEffect(()=>{
        if(user){
            setToken(localStorage.getItem("rockToken"));
            setUserId(localStorage.getItem("rockId"))
        }else{
            setToken("");
            setUserId("")
        }
        // console.log("u", user);
        // console.log("t", token);
    },[user])
      //value- объект с данными контекста
    return (
        <Ctx.Provider value={{
            goods,
            setGoods,
            serverGoods,
            setServerGoods,
            userId,
            setUserId,
            user,
            setUser,
            token,
            setToken,
            text,
            setText,
            api,
            setApi
        }}> 
        <Header user = {user} 
           setModalActive={setModalActive}
           serverGoods={serverGoods}
           />
        {!user&&<PromoBig/>}   
       <main>
        
        {/* <Search arr={serverGoods}/> - Переехал в Шапку*/}
       
        {/* SPA - Single Page Application (Одностраничное приложение) */}       
   {user && <Routes>
            <Route path="/add" element ={<Add/>}/>
            <Route path="/" element ={<Main/>}/>
            <Route path="/catalog" element={<Catalog 
            
            //Когда мы ставим лайк на товар -его нужно обновить 
            // в общем массиве с товарами (иначе лайк появиться 
            // только в карточке ,но после изменения стр или перехода
            // между страницами)мы его больше не увидим )
            setServerGoods={setServerGoods}
            />}/>
            <Route path="/favorites" element ={<Favorites
            goods={goods}
            userId={userId}
            setServerGoods={setServerGoods}
            />}/>
            <Route path="/product/:id" element ={<Product/>}/>
            <Route path="/draft"  element={<Draft/>} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} color="blue"/>}/>
        </Routes>}
        

         </main>
         {!user&&<PromoSmall/>}
            
            <Footer/>
            <Modal 
            setUser={setUser}
             active={modalActive}
             setActive={setModalActive}
             />
        </Ctx.Provider>
    )
}
export default App;
