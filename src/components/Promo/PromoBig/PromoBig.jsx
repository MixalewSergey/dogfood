import image from "../../../assets/images/PromoBig.jpg";
import "./style.css";


const PromoBig=()=>{
    return(
        <div className="promo__up">
            <a href="" target="_blank"><div className="border"><img src={image} width={650} height={335}/></div></a>
        </div>
    )// в href  вставляется ссылка на рекламодателя,  target="_blank"- открывает сайт в отдельном окне а не за место сайта 
}
export default PromoBig;