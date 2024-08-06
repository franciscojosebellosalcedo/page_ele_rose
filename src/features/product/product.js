import { createSlice } from "@reduxjs/toolkit";
import { nameKeyProductsFavorites } from "../../constants/constants";

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

			let listAux = state.data.favorites;
			const idProduct = action.payload;

			const indexProductFavorite = listAux.findIndex((favorite)=> favorite === idProduct);

			if(listAux.some((favorite)=> favorite === idProduct )){

				listAux.splice( indexProductFavorite , 1);

			}else{

				listAux = [idProduct , ...listAux];

			}

			state.data.favorites = listAux;
			localStorage.setItem(nameKeyProductsFavorites , JSON.stringify(listAux));

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
