import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import MenuCard from '../Components/MenuCard';
import Loader from '../Components/Loader';


const RestaurantMenu = () => {
    const params = useParams();
    const id = params.resId;

    const [restaurantInfo , setrestaurantInfo] = useState();
    const [restaurantMenuData , setRestaurantMenuData] = useState([]);

    useEffect(()=>{
        getRestaurantMenu();
    },[])

    async function getRestaurantMenu () {
        try {
            const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&catalog_qa=undefined&submitAction=ENTER&restaurantId="+id);
            const jsonData = await res.json();

            const restaurantHeader = jsonData?.data?.cards.map(x => x.card).find(x => x && x.card['@type']==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant").card.info || null;
            setrestaurantInfo(restaurantHeader);

            const menuItems = jsonData?.data?.cards?.find(x => x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(x => x.card?.card).filter(x => x['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory').map(x => x?.itemCards).flat().map(x => x?.card?.info) || [];

            const uniqueItem = []

            menuItems.forEach(item => {
                if(!uniqueItem.find((x) => x.id === item.id)){
                    uniqueItem.push(item)
                }
            });

            setRestaurantMenuData(uniqueItem);

        } catch (error) {
            console.log(error);
        }
    }
    console.log(restaurantInfo);
  return restaurantMenuData.length <= 0 ? (<Loader/>) : (
    <>
        <div className='w-[60%] mx-auto my-4 px-4 py-2'>
            {/* Menu Header */}
            <div>

                <div className='flex justify-between items-center my-4'>
                    <div>
                        <h1 className='text-xl font-bold'>{restaurantInfo.name}</h1>
                        <p className='text-base text-gray-500'>{restaurantInfo.cuisines.join(" , ")}</p>
                        <p className='text-base text-gray-500'>{restaurantInfo.areaName} {restaurantInfo.sla.lastMileTravelString}</p>
                    </div>

                    <div className='flex flex-col px-4 py-3 border-[2px] border-gray-300 rounded-lg w-[7rem]'>
                        <div className='flex items-center gap-2 text-green-500 ml-2'>
                            <FaStar size="1.3rem"/>
                            <h3>{restaurantInfo.avgRating}</h3>
                        </div>
                        <span>
                            <hr className='bg-black h-[2px] my-2'/>
                        </span>
                        <div>
                            <p className='text-xs'>{restaurantInfo.totalRatingsString}</p>
                        </div>
                    </div>
                </div>

                <p>{restaurantInfo.feeDetails.message}</p>
            </div>

            {
                Array(99).fill().map(x => {
                    return (<p className='inline-block my-4'>-</p>)
                })
            }

            <div className='flex items-center gap-6'>
                <div className='flex items-center gap-1'>
                    <MdAccessTimeFilled size="1.3rem"/>
                    <p>{restaurantInfo.sla.deliveryTime} MINS</p>
                </div>

                <div className='flex items-center'>
                    <LiaRupeeSignSolid size="1.3rem"/>
                    <p>{restaurantInfo.costForTwoMessage.slice(1)}</p>
                </div>
            </div>

            <hr className='my-8 h-[2px] bg-gray-300'/>

            {/* Menu */}
            {
                restaurantMenuData.map(menuItems => {
                    return (<MenuCard data={menuItems} key={menuItems.id}/>)
                })
            }
        </div>
    </>
  )
}

export default RestaurantMenu