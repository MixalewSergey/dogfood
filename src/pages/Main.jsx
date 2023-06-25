import image  from "../../src/assets/images/flat-lay-of-toys-with-food-bowl-and-fur-brush-for-dogs.jpg";
const Main =()=>{
    return<div className="Hello">
        <img src={image} style={{ display:"block", width: "100%", 
        borderRadius:"8px",padding:"0px"}}></img>
    <h1 style={{textAlign:"center"}}>Здесь всегда рады вам и вашему питомцу</h1>
    </div>
}

export default Main;