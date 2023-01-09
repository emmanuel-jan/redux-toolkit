import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Emmanuel Jan" },
  { id: "1", name: "David Gray" },
  { id: "2", name: "Neil Young" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
