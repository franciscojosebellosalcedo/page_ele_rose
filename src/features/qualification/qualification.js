import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    list: [],
  },
};

const qualificationSlice = createSlice({
  name: "qualification",
  initialState,
  reducers: {
		setQualification:(state,action)=>{
			state.data.list=action.payload;
		}
  },
});
export const {
	setQualification,
} = qualificationSlice.actions;
export default qualificationSlice.reducer;
