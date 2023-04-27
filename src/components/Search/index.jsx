import { useState } from "react";
import "./style.css";

const Search = () => {
    //let text = "Corn";
    const [text, setText] = useState("Corn")
    /** userState = то , что создает пару из переменной и
     *  функции ,которая ее изменяет ,
     * 
     * единсвенный аргумент userState- значение по умолчанию
     */
    const [count, updataCount] = useState(0);
    let n = 1;
    const click = () => {
        const click=()=>{}
        const saerchByText= (e) =>{
            //e.target (e.currentTarget)- обращение к тегу ,
            //на  котором висит событие
            console.log(e.target.value);
            setText(e.target.value);
        }
        // console.log(n++);
        updataCount(count + 1);
        //console.log("count", count)// новое состояние
        /**
         * Вызов функцию updateCount, мы гоорим приложени
         * что при следующем монтаже его параметр count  
         * будет равен новому значению
         */
    }
    return (
        <div className="search-block">
            <input type="search" value={text}
            onChange={saerchByText} />
            <button onClick={click}>Кнопочка</button>
            <hr />
            {/**<div>{text},{n},{count}</div>*/}
            <div>{text}</div>
        </div>
    )
}
export default Search;