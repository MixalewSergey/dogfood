import image  from "../../src/assets/images/flat-lay-of-toys-with-food-bowl-and-fur-brush-for-dogs.jpg";
import { useContext } from "react";
import Ctx from "../context";
import { Link } from "react-router-dom";

const Main =()=>{
    const {user}= useContext(Ctx);
    return<Link to="/catalog"><div className="Hello">
        <h1 style={{textAlign:"center", color:"Blue"}}>Привет {user}</h1>
        <img src={image} style={{ display:"block", width: "100%", 
        borderRadius:"8px",padding:"0px"}}></img>
    <h1 style={{textAlign:"center"}}>Здесь всегда рады вам и вашему питомцу</h1>
    </div></Link>
}

export default Main;