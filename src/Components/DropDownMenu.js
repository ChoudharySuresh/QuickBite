import { Menu } from '@headlessui/react'
import { MdOutlineKeyboardArrowDown , MdDelete } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import {removeFromCart} from "../Store/CartSlice"

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

const DropDownMenu = () => {
    const item = useSelector(state => state.Cart);

    const dispatch = useDispatch();

    const handleDelete = (item) => {
        dispatch(removeFromCart(item))
    }
    
  return (
    <>
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5  bg-white px-3 py-2 text-gray-900 shadow-sm ">
                <IoMdCart size="1.5rem" color='green'/>
                <p className='text-base'>({item.length})</p>
                <MdOutlineKeyboardArrowDown/>
                </Menu.Button>
            </div>

            
                <Menu.Items className="absolute right-0 z-10 mt-2 w-[35rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {
                        item.length <= 0 ? (<h1 className='text-center px-2 py-2'>Cart is Empty</h1>) 
                        :
                        <div className="py-1">
                            {
                                item.map(item => {
                                    return (
                                        <Menu.Item>
                                            <div className='px-5 py-2 hover:bg-gray-100 flex items-center justify-between'>
                                                <div className='w-[20rem] flex items-center gap-2'>
                                                    <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+item.imageId} className='w-[3rem] h-[3rem] rounded-lg' alt="cartImg" />
                                                    <h1 className='text-base'>{item.name}</h1>
                                                </div>
                                                <p>{
                                                    item.price > 0 ?
                                                    new Intl.NumberFormat("en-IN" , {
                                                        style:"currency",
                                                        currency:"INR"
                                                    }).format(item.price / 100):""

                                                }</p>

                                                <button onClick={() => handleDelete(item.id)} className='hover: ring-gray-200 bg-white rounded-full p-2'><MdDelete/></button>
                                            </div>
                                        </Menu.Item>
                                    )
                                })
                            }

                            <div className='flex justify-center my-2'>
                                <Link to="/cart"><button className='px-4 py-2 bg-orange-400 rounded-lg w-[100%] mx-5'>Go To Cart</button></Link> 
                            </div>
                        </div>
                    }
                </Menu.Items>
    </Menu>
    
    </>
  )
}

export default DropDownMenu






