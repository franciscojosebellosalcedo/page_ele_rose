import { createSlice } from "@reduxjs/toolkit";
import { saveCartLocalStorage } from "../../utils/utils";

const initialState = {
  data: {
    list: [],
		active:false,
		activeSendOrder:false,
		isActiveModalInfoOrder:false
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
		setAmountItemCart:(state,action)=>{
			const index=state.data.list.findIndex((item)=>item.product._id===action.payload.product._id);
			state.data.list[index].amount=action.payload.amount;
			saveCartLocalStorage(state.data.list);
		},
		decrementAmountItem:(state,action)=>{
			const list=state.data.list;
			for (let index = 0; index < list.length; index++) {
				const item = list[index];
				if(index===action.payload.index){
					if(item.amount-action.payload.amount>0){
						item.amount-=action.payload.amount;
					}
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
					if((item.amount+action.payload.amount)<=item.product.amount){
						item.amount+=action.payload.amount;
					}
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
		},
		setActiveSendOrder:(state,action)=>{
			state.data.activeSendOrder=action.payload;
		},
  },
});
export const {
	addItemCart,
	setActiveSendOrder,
	setAmountItemCart,
	decrementAmountItem,
	setActiveCart,
	incrementAmountItem,
	setCart,
	removeItemCart,
	clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
