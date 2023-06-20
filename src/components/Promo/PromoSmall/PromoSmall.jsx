import imageL from "../../../assets/images/PromoSmallLeft.jpg";
import imageR from "../../../assets/images/PromoSmallRight.png";

import "./style.css";


const PromoSmall=()=>{
    return(
        <div className="promo__down">
            <div className="promo__downL"><a href="" target="_blank">
                <div className="border">
                <img src={imageL} width={650} height={335} alt="Ветеринарная клиника"/>
                </div>
                </a>
                </div>



            <div className="promo__downR"><a href="https://www.youtube.com/@MrGREYFENIX" target="_blank">
                <div className="border">
                <img alt="YouTube Game" src={imageR} width={650} height={335}/>
                </div></a></div>
        </div>
    )



    
}

export default PromoSmall;