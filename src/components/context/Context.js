import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "./Reducer";
import { popularCourse } from "../services/c_data/course_data";

const Cart = createContext();

// const getLocalCartData = () => {
//   let localCartData = localStorage.getItem("innot");
//   if(localCartData === []){
//     return[];
//   }
//   else{
//    return JSON.parse(localCartData);
//   }
// };

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    popularCourse: popularCourse,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  });

  //adding the data in localstorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
