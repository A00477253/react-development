import { IMG_CDN_URL } from "../utils/constant";
const RestaurantCards = (props) =>{
    const {resData} =props;
    const{name,cuisines,avgRating,costForTwo,maxDeliveryTime,cloudinaryImageId}=resData?.data;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img style={{width:"100 px",margin:"5px",height:"100px",padding:"5px 5px"}}
           
            src={IMG_CDN_URL+cloudinaryImageId} alt="img"/>
            
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{"Rupees "+(costForTwo/100)+" for two"}</h4>
            <h4>{maxDeliveryTime}</h4>
        </div>
    )
};

export default RestaurantCards;