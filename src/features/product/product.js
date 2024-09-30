import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    list: [],
    filter: [],
		productsFilterSelect:[],
    productsNew:[],
    favorites:[]
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {

		setProductsFavorites:(state,action)=>{
			state.data.favorites=action.payload;
		},

		addProductFavorite: (state, action)=>{

			state.data.favorites = [...action.payload];

		},

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
			state.data.filter=[...action.payload];
		},

  },
});
export const {
	setProducts,
	setProductsFilter,
	setProductsFilterSelect,
  setProductsNew,
	setProductsFavorites,
	addProductFavorite
} = productSlice.actions;
export default productSlice.reducer;
