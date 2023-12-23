import { Link } from "react-router-dom";
import EmptyCartImg from "../Images/Empty Cart.jpg"

const EmptyCart = () => {
  return (
    <>
      <div className='w-[100vw] my-24 flex justify-center items-center'>
        <div className="text-center flex flex-col items-center gap-4">
          <div>
            <img src={EmptyCartImg} alt="emptyCartImg" className="w-[20rem]"/>
          </div>

          <div>
            <h1 className="text-2xl font-semibold">Your cart is empty</h1>
            <p className="my-2">You can go to home page to view more restaurants</p>
          </div>

          <div>
            <Link to="/" className="px-4 py-2 bg-orange-400 rounded-md uppercase text-white text-lg" >See Restaurants</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmptyCart