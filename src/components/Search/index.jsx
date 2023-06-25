import { useState, useEffect, useContext } from "react";
import Ctx from "../../context";
import "./style.css";
import {SearchHeart} from "react-bootstrap-icons";
//arr-список товаров из Json- файла
const Search = ({arr}) => {
    const {setGoods} = useContext(Ctx);
    // let text = "Corn";
    const [text, setText] = useState("");
    const [quantity, setQuantity] = useState(arr.length);
    /**
      * useState= то что создает пару из
      * переменной и функции которая её изменяет
      * 
      * Единственный аргумент userState-
      * значение по умолчанию которая сохроняеться
      * в скобках и передаеться в значение {count}-
      * -в этом примере
      */
    const [count, updateCount] = useState(0);

    useEffect(()=>{
        if(text){
            let result = arr.filter(el=> new RegExp(text, "i").test(el.name))
        setGoods(result);
        setQuantity(result.length);
        }else{
            setGoods(arr);
            setQuantity(arr.length)
        }
    },[arr]);

    let n = 1;
    const click = () => {
        console.log(n++);
        /**
         * Вызывая фунткцию updateCount, мы говорим приложению
         * Что при следующем монтаже его параметр  count 
         * равен новому значению 
         */
        updateCount(count + 1);//новое состояние
    }
    const searchByText = (e) => {
    //e.target(e.currentTarget)-обращение к тегу 
    // на котором висит событие
     let val = e.target.value;  
        setText(val);
        let result = arr.filter(el => el.name.toLowerCase().includes(val.toLowerCase()));
        // let result = arr.filter(el=> new RegExp(val, "i").test(el.name))
        setGoods(result);
        setQuantity(result.length);
        //console.log(result);
    }
    return (<input placeholder="ищу тебя" type="search" value={text}onChange={searchByText} />
        // <div className="search-block">
            
        //         
        //     {/**<input 
        //      * type="search"
        //      *  value={text}
        //     onChange={(e)=>setText(e.target.value)}/>

        //     Если писать кототкую в одну строчку функцию 
        //     но если нужно фильтровать ид ругие операции 
        //     лучше отдельно вынести функцию !!!
        //    */}<SearchHeart/>
        //     {/* <button className="search-button" onClick={click}>Кнопочка</button>
        //     <hr /> */}
        //     {/* <div>{text},{n},{count}</div> */}
        //     {/* <div>По вашему запросу « {text} » найдено {quantity} подходящих товаров</div> */}
        // </div>
    )

}
export default Search;


// // Search =>
// //     document.createElement("div")
// ...
// //     document.createElement("input")
// ...
// //     button
// ...
// //     div2
// ...
// //     div.append(input,button,div2)

/**
 * <div onclick="foo()"></div>
 * 
 * <div.onclick=function(){}
 * div.addEventListner("click", foo)
 * <div onClick={foo}>
 */
/**   Жизненый цикл компанента :
 *    0 Рендеринг
 *         Render
 * 
 *    1 Монтировка (монтаж приложений)
 * componentWillMount- я собираюсь собирать(Смонтировать)
 * componentDidMount- я сделал (смонтировал)
 * 
 *   2 Размонтировка (разбор приложения)
 * componentWillUnmount - ты планируешь разрушеться 
 * componentDidUnmount - ты разрушелся 
 * componenyWillUpdate - ты обновляйся пожалуйста 
 * componenyDidUpdate - после того как я обновился, что то изменилось
 *  
 */