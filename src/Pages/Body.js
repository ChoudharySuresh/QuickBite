import { useEffect } from "react";
import Card from "../Components/Card";
import Filter from "../Components/Filter";
import Shimmer from "../Components/Shimmer";
import { Link } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { fetchProducts } from "../Store/productSlice";
import {STATUSES} from "../Store/productSlice";


const Body = () => {
  const {data,Status,searchQuery,fastDelivery , sort , veg} = useSelector(state => state.product);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  const transformedRestaurant = () => {
    let sortedRestaurant = data;

    if(sort){
      sortedRestaurant = sortedRestaurant.filter((prod) => prod.info.avgRating).sort((a,b) => sort ==="4.0+" ? a.info.avgRating - b.info.avgRating : b.info.avgRating - a.info.avgRating);
    }

    if(fastDelivery){
      sortedRestaurant = sortedRestaurant.filter((prod) => prod.info.sla.deliveryTime).sort((a,b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime)
    }

    if(searchQuery){
      sortedRestaurant = sortedRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchQuery))
    }

    if(veg){
      sortedRestaurant = sortedRestaurant.filter((res) => res.info.veg)
    }
    return sortedRestaurant;
  }

  return (
    <>
      <Filter/>
      
      <div className="flex w-[95%] flex-wrap mx-auto my-5 bg-[#FFFFFF]">
        {
          (Status === STATUSES.LOADING) ? <Shimmer/> 
          :
          (Status === STATUSES.ERROR) ? (<h1>Error...</h1>)
          :
          (transformedRestaurant().length <= 0) ? (<h1 className="text-center text-xl">No Restaurant Found </h1>)
          :
          transformedRestaurant().map((restaurant) => {
            return ( <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><Card data={restaurant.info} /></Link>)
          })
        }
      </div>
    </>
  )
}

export default Body