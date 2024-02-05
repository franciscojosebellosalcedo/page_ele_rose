import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoib2JqZWN0IiwiZW1haWwiOiJvYmplY3RAZ21haWwuY29tIiwiX2lkIjoiNjViNTFlZDgwYjY1M2E0YzUzMmMyNWRkIiwiaWF0IjoxNzA2MzY4NzYyfQ.sJ6a1sajkkfoG8x4DqJggzjWVKboMB6H6jWQYmjdAHY"
  },
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
		setToken:(state,action)=>{
			state.data.token=action.payload;
		}
  },
});
export const {
	setToken,
} = tokenSlice.actions;
export default tokenSlice.reducer;
