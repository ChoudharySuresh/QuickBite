import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();


const initialState = {
    initialized : false,
    restaurantData : [],
    menuData:[],
    cart : []
};


const ContextProvider = ({children}) => {
    
    const [state , dispatch] = useReducer(cartReducer , initialState);
    const [productState , productDispatch] = useReducer(productReducer , {
        searchQuery : "",
        byFastDelivery:false,
    })
    useEffect(()=> {
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        .then(res => res.json())
        .then(data => dispatch({
            type:"INITIALIZE_RESTAURANT",
            payload: {
                ...initialState,
                restaurantData : data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
            }
        }))
    },[])
    
    return(
        <Cart.Provider value={{state , dispatch , productState , productDispatch}}>
            {children}
        </Cart.Provider>
    )
}

export const CartState = () => {
    return useContext(Cart);
}

export default ContextProvider;
