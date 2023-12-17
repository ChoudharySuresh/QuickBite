import { Link } from "react-router-dom"
// import {CartState} from "../Context/Context";
import DropDownMenu from "../Components/DropDownMenu"


const Header = () => {
  // const {productDispatch} = CartState();

    return (
        <>
          <div className="bg-white shadow-md flex items-center justify-between py-2 px-5">
    
            <div>
               <Link to="/"><h1 className="text-4xl text-orange-400">QuickBite</h1></Link> 
            </div>
    
            <div className="flex items-center gap-20">
              <div className="flex gap-4 items-center">
                  <input type="text" placeholder="Search" className="px-5 py-2 text-xl outline-none rounded-lg border border-solid border-orange-300"/>
                  {/* <button className="bg-orange-500 rounded-md px-4 py-2 text-white text-xl">Search</button> */}
              </div>
    
              <nav>
                <ul className="flex items-center gap-8 text-xl">
                  <li> <Link to="/">About</Link> </li>
                  <li><DropDownMenu/></li>
                  <li> <Link to="/">Log In</Link> </li>
                </ul>
              </nav>
            </div>
          </div>
        
        </>
    )
}

export default Header