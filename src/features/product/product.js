import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    list: [],
    filter: [],
    productsNew:[]
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
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
  setProductsNew,
} = productSlice.actions;
export default productSlice.reducer;
