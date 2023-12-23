import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {addToCart} from "../Store/CartSlice";
import { useDispatch } from 'react-redux';

const MenuCard = ({data}) => {
  const {name , price , description , imageId } = data;
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(addToCart(data))
    toast.success('Item Added To Cart', {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <div>
      <div className='flex items-center pb-12 my-4'>
        <div className='w-[90%]'>
          <div>
            {/* Veg Icon */}
            <h3 className='font-semibold'>{name}</h3>
              <p className='mt-1'>
                {
                  data.price > 0 ?
                  new Intl.NumberFormat("en-IN" , {
                    style:"currency",
                    currency:"INR",
                  }).format(price/100)
                  :
                  ""
                }
              </p>
          </div>

          <div>
            <p className='mt-3 text-sm'>{description}</p>
          </div>
        </div>


        <div className='relative'>
          <div>
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+imageId} alt="menuImg" className='h-[7rem] w-[10rem] rounded-lg'/>
          </div>
          <button onClick={handleOnClick} className='bg-white px-4 py-2 rounded-md  text-green-600 border border-green-200 w-[7rem] absolute top-24 left-6 uppercase hover:shadow-lg'>Add</button>
          <ToastContainer
            position="bottom-center"
            autoClose={500}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            toastStyle={{background:"white",boxShadow:"none",border:"2px solid rgb(243 244 246/1)"}}
            />
        </div>
      </div>

      <hr className='bg-gray-300 h-[2px]'/>
    </div>
  )
}

export default MenuCard