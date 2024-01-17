import RestaurantCards from "./RestuarantCard";
import resList from "../utils/mockdata";
import { useState } from "react";
const Body=() =>{
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    const filterRestuarant=()=>{
        console.log("Button clickecd");
        const filtered=resList.filter((restaurant)=>restaurant.data.avgRating>4);
        setFilteredRestaurants(filtered);
        console.log(filteredRestaurants);
    
    };
    const clearFilter=()=>{
        setFilteredRestaurants([]);
    
    };
    const restaurantList = filteredRestaurants && filteredRestaurants.length > 0 ? filteredRestaurants : resList;
    console.log(restaurantList);


    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={filterRestuarant} >
                    TopRated Restaurants
                </button>
                <button className="filter-btn" onClick={clearFilter} >
                    Clear Filter
                </button>
            </div>
            <div className="rest-container">
                {
                    
                    restaurantList.map(restaurant => <RestaurantCards key={restaurant.data.id} resData={restaurant}/>)
                    
                }

                

            </div>
            

        </div>
    )
};




export default Body;