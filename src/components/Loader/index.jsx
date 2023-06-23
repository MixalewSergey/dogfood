import { ArrowClockwise } from "react-bootstrap-icons";
import"./style.css";

const Loader = ()=>{
    return <div className="loader">
        <span className="loader-img" >
            <ArrowClockwise/>
        </span>
        <h5>Данные загружаются</h5>
    </div>
}

export default Loader;