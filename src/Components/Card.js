import React from 'react'
import RatingStar from './RatingStar';

const Card = ({data}) => {
    const {name , cuisines , cloudinaryImageId , avgRating , sla , areaName } = data;
  return (
    <div className="w-[20rem] m-4 hover:cursor-pointer hover:scale-[0.9]">
        <img className="rounded-2xl" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="img"/>
        <div className="px-2">
            <h2 className="font-bold text-2xl my-2">{name}</h2>
            <div className="flex items-center gap-2 font-bold">
                <RatingStar/>
                <p>{avgRating}</p>
                <p>{sla.slaString}</p>
            </div>
            <p className="font-light">{cuisines.join(" , ")}</p>
            <p className="font-light">{areaName}</p>
        </div>
    </div>
  )
}

export default Card