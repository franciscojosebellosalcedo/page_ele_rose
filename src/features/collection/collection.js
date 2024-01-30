import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    list: [],
  },
};

const collesctionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
		setCollections:(state,action)=>{
			state.data.list=action.payload;
		}
  },
});
export const {
	setCollections,
} = collesctionSlice.actions;
export default collesctionSlice.reducer;
