import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    list: [],
	reverse:[],
  },
};

const collesctionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
		setCollections:(state,action)=>{
			state.data.list=action.payload;
		},
		setCollectionsReverse:(state,action)=>{
			state.data.reverse=action.payload;
		}
  },
});
export const {
	setCollections,
	setCollectionsReverse,
} = collesctionSlice.actions;
export default collesctionSlice.reducer;
