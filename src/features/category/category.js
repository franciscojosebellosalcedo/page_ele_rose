import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    list: [],
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
		setCategories:(state,action)=>{
			state.data.list=action.payload;
		}
  },
});
export const {
	setCategories,
} = categorySlice.actions;
export default categorySlice.reducer;
