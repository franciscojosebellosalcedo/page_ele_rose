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

  },
});
export const {

} = collesctionSlice.actions;
export default collesctionSlice.reducer;
