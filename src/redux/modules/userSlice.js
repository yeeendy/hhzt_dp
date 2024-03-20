import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {};

const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialStateValue },
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
