import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data:{
		user:{
			name:"",
			phone:"",
			address:"",
			email:"",
			_id:"",
			token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9iamVjdEBnbWFpbC5jb20iLCJfaWQiOiI2NWMyYTIzYjFlNzBhNTA1ODEzNDE0YTEiLCJpYXQiOjE3MDcyNTQzMzh9.wbXBxy6YAnJalEh9ywaAmSaqz8dmEnFDt44AF4hbwVU"
		},
	}
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
		setUser:(state,action)=>{
			state.data.user=action.payload;
		},
  },
});
export const {
	setUser,
} = userSlice.actions;
export default userSlice.reducer;
