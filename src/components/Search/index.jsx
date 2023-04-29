import { useState } from "react";
import "./style.css";

const Search = () => {
    let text = "Corn";
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

    let n = 1;
    const click = () => {
        console.log(n++);
        /**
         * Вызывая фунткцию updateCount, мы говорим приложению
         * Что при следующем монтаже его параметр  count 
         * равен новому значению 
         */
        updateCount(count+1);//новое состояние
    }
    return (
        <div className="search-block">
            <input type="search" />
            <button onClick={click}>Копочка</button>
            <hr />
            <div>{text},{n},{count}</div>
        </div>
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