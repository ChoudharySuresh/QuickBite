// import {CartState} from "../Context/Context";
import { useEffect } from "react";
import Card from "../Components/Card";
import Filter from "../Components/Filter";
import Shimmer from "../Components/Shimmer";
import { Link } from "react-router-dom";

import { useDispatch ,useSelector} from "react-redux";
import { fetchProducts } from "../Store/productSlice";
import {STATUSES} from "../Store/productSlice";


const Body = () => {
  // const {state:{restaurantData, initialized} , productState:{searchQuery , byFastDelivery,sort}} = CartState();

  // const transformRestaurant = () => {
  //   let sortedRestaurant = restaurantData;

  //   if(sort){
  //     sortedRestaurant = sortedRestaurant.sort((a,b) => 
  //       sort === "lowToHigh" ? a.price - b.price : b.price - a.price);
  //   }

  //   if(byFastDelivery){
  //     sortedRestaurant = sortedRestaurant.filter((prod) => prod.info.sla.deliveryTime).sort((a,b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime)
  //   }
    
  //   if(searchQuery){
  //     sortedRestaurant = sortedRestaurant.filter(item => item.info.name.toLowerCase().includes(searchQuery))
  //   }
  //   return sortedRestaurant;
  // }
  // console.log(restaurantData);


  const dispatch = useDispatch();

  const {data,Status} = useSelector(state => state.product);

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  return (
    <>
      <Filter/>
      
      <div className="flex w-[95%] flex-wrap my-8 mx-auto bg-[#FFFFFF]">
        {
          (Status === STATUSES.LOADING) ? <Shimmer/> 
          :
          (Status === STATUSES.ERROR) ? (<h1>Error</h1>)
          :
          data.map((restaurant) => {
            return ( <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><Card data={restaurant.info} /></Link>)
          })
        }
      </div>
    </>
  )
}

export default Body