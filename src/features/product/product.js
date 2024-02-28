import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    list: [],
    filter: [],
		productsFilterSelect:[],
    productsNew:[]
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
	setProductsFilterSelect:(state,action)=>{
		state.data.productsFilterSelect=action.payload;
	},
	setProducts:(state,action)=>{
		state.data.list=action.payload;
	},
	setProductsNew:(state,action)=>{
		state.data.productsNew=action.payload;
	},
	setProductsFilter:(state,action)=>{
		state.data.filter=action.payload;
	},
  },
});
export const {
	setProducts,
	setProductsFilter,
	setProductsFilterSelect,
  setProductsNew,
} = productSlice.actions;
export default productSlice.reducer;
