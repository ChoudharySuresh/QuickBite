import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    Status: STATUSES.IDLE,
    searchQuery: "",
    fastDelivery: false,
    sort: "",
    veg: false,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },

    setStatus(state, action) {
      state.Status = action.payload;
    },

    filterBySearch(state, action) {
      state.searchQuery = action.payload;
    },
    filterByRatings(state, action) {
      state.sort = action.payload;
    },
    filterByDelivery(state) {
      state.fastDelivery = !state.fastDelivery;
    },
    filterByVeg(state, action) {
      state.veg = !state.veg;
    },
    clearFilter(state) {
      state.searchQuery = "";
      state.fastDelivery = false;
      state.sort = "";
      state.veg = false;
    },
  },
});

export const {
  setProducts,
  setStatus,
  filterBySearch,
  filterByDelivery,
  filterByRatings,
  filterByVeg,
  clearFilter,
} = productSlice.actions;

export default productSlice.reducer;

export const fetchProducts = () => {
  return async function fecthProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await res.json();

      let restaurantIndex = -1;

      jsonData?.data?.cards.forEach((card, index) => {
        if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          restaurantIndex = index;
        }
      });

      if (restaurantIndex !== -1) {
        dispatch(
          setProducts(
            jsonData?.data?.cards[restaurantIndex]?.card?.card?.gridElements
              ?.infoWithStyle?.restaurants
          )
        );
      } else {
        throw new Error("Restaurant information not found in API response.");
      }
      dispatch(setStatus(STATUSES.IDLE));
      // console.log(jsonData);
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
};
