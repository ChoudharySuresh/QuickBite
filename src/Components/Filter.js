import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";

const Filter = () => {
    const [showModal , setShowModal] = useState(false);

  return (
    <>
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
                                {/* <div className="flex items-center gap-2 my-4 text-lg">
                                    <input type="radio" name="group1" id="lowToHigh" onChange={() => handleSortByPrice("lowToHigh")} checked={sort === "lowToHigh" ? true : false}/>
                                    <label htmlFor="lowToHigh">Cost: Low To High</label>
                                </div>
                                <div className="flex items-center gap-2 my-4 text-lg">
                                    <input type="radio" name="group1" id="highToLow" onChange={() => handleSortByPrice("highToLow")} checked={sort === "highToLow" ? true : false}/>
                                    <label htmlFor="highToLow">Cost: High To Low</label>
                                </div>
                                <div className="flex items-center gap-2 my-4 text-lg">
                                    <input type="checkbox" id="fastDelivery" onChange={() => productDispatch({type:"FILTER_BY_DELIVERY"})} checked={byFastDelivery}/>
                                    <label htmlFor="fastDelivery">Fast Delivery</label>
                                </div> */}
                            </div>

                            <div className="flex justify-end gap-4 ">
                                <button className="px-4 py-2 border-[2px] border-gray-200 rounded-lg">Clear Filter</button>
                                <button className="px-4 py-2 rounded-lg w-[10rem] bg-orange-400 text-white font-semibold">Apply</button>
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
    </>
  )
}

export default Filter