import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data:{
		user:{
			name:"",
			phone:"",
			address:"",
			email:"",
			_id:"",
			token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9iamVjdEBnbWFpbC5jb20iLCJfaWQiOiI2NWNmZjY4NjAwOWY4ZDQyYTc0ZWRhMGYiLCJpYXQiOjE3MDgxMjc5MTl9.Ma8Y26giLmm1HhJugkG_nw_1peJoalglsjRkpUl9DGU"
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
