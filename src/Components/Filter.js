import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import {filterByDelivery , clearFilter , filterByRatings , filterByVeg} from "../Store/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
    const [showModal , setShowModal] = useState(false);
    const [activeVegBtn , setActiveVegBtn] = useState(false);

    const {fastDelivery , sort , veg} = useSelector(state => state.product);
    // console.log(veg);
    const dispatch = useDispatch();

    const handleClearFilter = () => {
        dispatch(clearFilter());
    }

    const handleVegFilter = () => {
        dispatch(filterByVeg())
        setActiveVegBtn(!activeVegBtn);
    }

  return (
    <div className="flex items-center">
        <div className="mx-16 my-8">
            <button onClick={() => setShowModal(true)} className="flex items-center gap-2 text-xl px-4 py-2 border-[2px] shadow-sm rounded-full border-slate-200">Filter <FiFilter size="1.3rem"/></button>
        </div>

        {
            showModal ? (
                <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">

                    <div className="relative w-[40rem] my-6 mx-auto max-w-3xl bg-white rounded-lg">

                        <div className="border-0 rounded-lg shadow-lg p-6 relative flex flex-col w-full bg-white outline-none focus:outline-none">

                            <div className="flex items-center justify-between mb-2">
                                <h1 className="text-4xl font-bold">Filter</h1>
                                <button onClick={() => setShowModal(false)} className="cursor-pointer"><IoCloseCircleOutline size="2rem"/></button>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 my-4 text-lg">
                                    <input type="radio" id="rating4.0+" name="rating" onChange={() => dispatch(filterByRatings("4.0+"))} checked={sort === "4.0+" ? true : false}/>
                                    <label htmlFor="rating4.0+">Ratings 4.0+</label>
                                </div>
                                <div className="flex items-center gap-2 my-4 text-lg">
                                    <input type="radio" id="rating4.5+" name="rating" onChange={() => dispatch(filterByRatings("4.5+"))} checked={sort === "4.5+" ? true : false}/>
                                    <label htmlFor="rating4.5+">Ratings 4.5+</label>
                                </div>
                                <div className="flex items-center gap-2 my-4 text-lg">
                                    <input type="checkbox" id="fastDelivery" onChange={() => dispatch(filterByDelivery())} checked={fastDelivery}/>
                                    <label htmlFor="fastDelivery">Fast Delivery</label>
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 ">
                                <button onClick={handleClearFilter} className="px-4 py-2 border-[2px] border-gray-200 rounded-lg">Clear Filter</button>
                                <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg w-[10rem] bg-orange-400 text-white font-semibold">Apply</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>                
            ) 
            : 
            null
        }

        {/* <button onClick={handleVegFilter} className={`flex items-center gap-2 text-xl px-4 py-2 border-[2px] shadow-sm rounded-full border-slate-200 ${activeVegBtn ? `bg-gray-100 border-[1px] border-black` : ``}`}>
            Pure Veg {' '}
            {
                activeVegBtn && (<button onClick={handleVegFilter}><RxCross1/></button>)
            }
        </button> */}

        {/* New Logic */}
        <button onClick={handleVegFilter} className={`flex items-center gap-2 text-xl px-4 py-2 border-[2px] shadow-sm rounded-full border-slate-200 ${activeVegBtn ? `bg-gray-100 border-[1px] border-black` : ``}`}>
            Pure Veg 
        </button>
    </div>
  )
}

export default Filter