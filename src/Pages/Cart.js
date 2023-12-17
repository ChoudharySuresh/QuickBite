import { FcCheckmark } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux"
import {removeFromCart , changeCartQuantity} from "../Store/CartSlice"
import { useEffect, useState } from "react";


const Cart = () => {
    const cartItem = useSelector(state => state.Cart)
    
    const dispatch = useDispatch();
    const [total , setTotal] = useState(0);

    const handleDelete = (item) => {
        dispatch(removeFromCart(item))
    }

    const handleQuantityChange = (id , newQty) =>{
        dispatch(changeCartQuantity({id,qty:newQty}));
    }


    useEffect(()=>{

        // const convertToCurrency = value => {
        //     return new Intl.NumberFormat('en-IN', {
        //       style: 'currency',
        //       currency: 'INR',
        //     }).format(value / 100);
        // };

        const subTotal = cartItem.reduce((acc , curr) => acc + (curr.price) * curr.qty , 0)
        const deliveryFee = 42;
        const gstCharges = (subTotal + deliveryFee) * 0.18;
        const orderTotal = subTotal + deliveryFee + gstCharges;

        console.log('subTotal:', subTotal);
        console.log('deliveryFee:', deliveryFee);
        console.log('gstCharges:', gstCharges);
        console.log('orderTotal:', orderTotal);
        
        if(!isNaN(orderTotal)){
            setTotal(orderTotal);
        }
    },[cartItem])

  return (
    <>
        <div className="p-3">
            <div>
                <p className="text-4xl font-semibold mx-5 my-2">Cart</p>
            </div>


            <div className="flex gap-4 py-2">
                <div className="w-[65%]">
                    <hr  className="h-[2.5px] bg-gray-200 mx-4"/>
                    {
                        cartItem.map((item) => {
                            return (
                                <div>
                                    <div className="flex items-start justify-between px-4 py-4">
                                        <div className="flex gap-8 w-[40rem]">
                                            <img className="w-[14rem] h-[14rem] rounded-lg" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+item.imageId} alt="itemImg" />

                                            <div className="flex flex-col justify-between">
                                                <div>
                                                    <h1>{item.name}</h1>
                                                    <p className="font-semibold my-2">
                                                        {
                                                            item.price > 0 ? new Intl.NumberFormat("en-IN" , {
                                                                style:"currency",
                                                                currency:"INR"
                                                            }).format(item.price / 100)
                                                            :
                                                            ""
                                                        }
                                                    </p>
                                                </div>
                                                <div>
                                                    {
                                                        item.inStock ? (<div className="flex items-center gap-2"> <FcCheckmark/> In Stock </div>) : (<div> <RxCross1 color="red"/> Not in Stock</div>)
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <select className="bg-gray-200 rounded-md px-2 py-2" onChange={(event) => handleQuantityChange(item.id , event.target.value)}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        {/* Cross Icon */}
                                        <button onClick={() => handleDelete(item.id)} className="py-2"><RxCross1/></button>
                                    </div>

                                    <hr  className="h-[2.5px] bg-gray-200 my-4 mx-4"/>
                                </div>
                                
                            )
                        })
                    }
                </div>

                <div className="bg-gray-100 rounded-lg w-[35%] px-8 py-4 h-[100%]">
                    <h2 className="text-2xl pb-2">Order Summary</h2>
                    <div>
                        <div>
                            <div className="flex justify-between my-4">
                                <p className="text-gray-600">SubTotal</p>
                                <p>₹100</p>
                            </div>
                            <hr className="h-[2.5px] bg-gray-300"/>
                        </div>
                        <div>
                            <div className="flex justify-between my-4">
                                <p className="text-gray-600">Delivery Fee</p>
                                <p>₹42</p>
                            </div>
                            <hr className="h-[2.5px] bg-gray-300"/>
                        </div>
                        <div>
                            <div className="flex justify-between my-4">
                                <p className="text-gray-600">GST and Restaurant Charges</p>
                                <p>₹53.49</p>
                            </div>
                            <hr className="h-[2.5px] bg-gray-300"/>
                        </div>

                        <div className="flex justify-between my-6 text-xl">
                            <p>Order Total</p>
                            <p>{total}</p>
                        </div>
                    </div>
                    <button className="w-[100%] px-4 py-3 rounded-lg bg-[#4F46E5] text-white">Checkout</button>
                </div>
            </div>
        </div>

    </>
  )
}

export default Cart