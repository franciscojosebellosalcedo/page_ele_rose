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
		isOpenModal:false
	}
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
		setUser:(state,action)=>{
			state.data.user=action.payload;
		},
		setIsOpenModal:(state)=>{
			state.data.isOpenModal=!state.data.isOpenModal;
		},
  },
});
export const {
	setUser,
	setIsOpenModal,
} = userSlice.actions;
export default userSlice.reducer;
