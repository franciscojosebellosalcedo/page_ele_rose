import { createSlice } from "@reduxjs/toolkit";
import { saveCartLocalStorage } from "../../helpers/helpers";

const initialState = {
  data: {
    list: [],
	active:false
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
		setCart:(state,action)=>{
			state.data.list=action.payload;
			saveCartLocalStorage(state.data.list);
		},
		decrementAmountItem:(state,action)=>{
			const list=state.data.list;
			for (let index = 0; index < list.length; index++) {
				const item = list[index];
				if(index===action.payload.index){
					const amount=item.amount+=action.payload.amount;
					console.log(amount)
				}
			}
			state.data.list=list;
			saveCartLocalStorage(state.data.list);
		},
		incrementAmountItem:(state,action)=>{
			const list=state.data.list;
			for (let index = 0; index < list.length; index++) {
				const item = list[index];
				if(index===action.payload.index){
					item.amount+=action.payload.amount;
				}
			}
			state.data.list=list;
			saveCartLocalStorage(state.data.list);
		},
		addItemCart:(state,action)=>{
			state.data.list.unshift(action.payload);
		},
		removeItemCart:(state,action)=>{
			state.data.list.splice(action.payload,1);
			saveCartLocalStorage(state.data.list);
		},
		clearCart:(state)=>{
			state.data.list=[];
		},
		setActiveCart:(state)=>{
			state.data.active=!state.data.active;
		}
  },
});
export const {
	addItemCart,
	decrementAmountItem,
	setActiveCart,
	incrementAmountItem,
	setCart,
	removeItemCart,
	clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
