import { BoxArrowInLeft} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Profile=({user, color, setUser})=>{
    const navigate= useNavigate();  
     const captionStyle ={
        fontWeight : "bold",
        color : color,
        }


    const logOut=(e)=>{
        e.preventDefault();
        setUser("");//значение false  setUser("null");setUser();setUser("rockUser");
        localStorage.removeItem("rockUser");
        localStorage.removeItem("rockToken");
        localStorage.removeItem("rockId");
        navigate("/");
        // useNavigate()("/");-замыкание
    }
    
    return<>
    <h1>Личный кабинет</h1>
    <div>
        {/*&nbsp;- символ пробела , надо запомнить */}
      <span style={{ color: 'red' }}>Добро пожаловать,&nbsp;</span>
        <span style = {captionStyle} >{user}</span>
        !
    </div>
    <Link to="" onClick={logOut} title="Выйти"><BoxArrowInLeft/></Link>
    </>
}

export default Profile
