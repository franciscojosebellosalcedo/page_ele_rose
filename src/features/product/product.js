import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    list: [],
    filter: [],
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
		setProducts:(state,action)=>{
			state.data.list=action.payload;
		},
		setProductsFilter:(state,action)=>{
			state.data.filter=action.payload;
		},
  },
});
export const {
	setProducts,
	setProductsFilter,
} = productSlice.actions;
export default productSlice.reducer;
