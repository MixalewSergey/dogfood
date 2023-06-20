import image from"../../assets/images/Logo.webp"
import {Link} from"react-router-dom"


const Logo =()=>{
    return<Link to="/" className="logo">
        <img src={image} alt="DogFood"/>
        <span>RockDog</span>
    </Link>
}
export default Logo;