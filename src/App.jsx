import { useState, useEffect } from "react";//useEffect срабатывает каждый раз при создание или пересоздание компонента!
import { Routes, Route } from "react-router-dom";
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
    // Товары из БД
    const [serverGoods, setServerGoods] = useState([]);
    // Товары для поиска и фильтрации
    const [goods, setGoods] = useState(serverGoods);
    
    useEffect(()=>{
        if(token){
        fetch("https://api.react-learning.ru/products",{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }
        )
        .then(res=>res.json())
        .then(data=>{console.log(data)
           setServerGoods(data.products)})
        }
     }, [token])

     useEffect(()=>{
        setGoods(serverGoods);
     },[serverGoods])

    useEffect(()=>{
        if(user){
            setToken(localStorage.getItem("rockToken"))
        }else{
            setToken("");
        }
        console.log("u", user);
        console.log("t", token);
    },[user])

    return (
        <>
            <Header user = {user} 
           setModalActive={setModalActive}/>
        {!user&&<PromoBig/>}   
       <main>
        <Search arr={[]} upd={()=>{}}/>
       
        {/* SPA - Single Page Application (Одностраничное приложение) */}       
   {user && <Routes>

            <Route path="/" element ={<Main/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
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
        </>
    )
}
export default App;
