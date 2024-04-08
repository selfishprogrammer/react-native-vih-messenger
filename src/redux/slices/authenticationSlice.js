import {createSlice} from '@reduxjs/toolkit';

const authenticationSlice = createSlice({
  name: 'authenticationSlice',
  initialState: {
    activeTab: '1',
    bottomNavigation: true,
    chats: [],
  },

  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setBottomNavigation: (state, action) => {
      state.bottomNavigation = action.payload;
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
  },
});
export const {setActiveTab, setBottomNavigation, setChats} =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
