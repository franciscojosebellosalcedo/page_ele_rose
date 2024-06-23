import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: 0,
};

const amountView = createSlice({
  name: "amountView",
  initialState,
  reducers: {
		setAmountView:(state,action)=>{
			state.data = action.payload;
		}
  },
});
export const {
	setAmountView
} = amountView.actions;
export default amountView.reducer;
