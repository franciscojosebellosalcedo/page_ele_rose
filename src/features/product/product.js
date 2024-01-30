import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    list: [],
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
		setProducts:(state,action)=>{
			state.data.list=action.payload;
		}
  },
});
export const {
	setProducts,
} = productSlice.actions;
export default productSlice.reducer;
