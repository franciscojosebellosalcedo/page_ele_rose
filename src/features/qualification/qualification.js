import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    list: [],
		active:true
  },
};

const qualificationSlice = createSlice({
  name: "qualification",
  initialState,
  reducers: {
		setQualification:(state,action)=>{
			state.data.list=action.payload;
		},
		setActiveQualification:(state,action)=>{
			state.data.active=action.payload;
		},
  },
});
export const {
	setQualification,
	setActiveQualification
} = qualificationSlice.actions;
export default qualificationSlice.reducer;
