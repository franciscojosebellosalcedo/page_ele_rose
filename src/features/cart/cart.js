import { createSlice } from "@reduxjs/toolkit";
import { getCartLocalStorage } from "../../helpers/helpers";

const initialState = {
  data: {
    list: [] || getCartLocalStorage(),
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
		setCart:(state,action)=>{
			state.data.list=action.payload;
		},
		addItemCart:(state,action)=>{
			state.data.list.unshift(action.payload);
		},
		removeItemCart:(state,action)=>{
			state.data.list.splice(action.payload,1);
		},
		clearCart:(state)=>{
			state.data.list=[];
		}
  },
});
export const {
	addItemCart,
	setCart,
	removeItemCart,
	clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
