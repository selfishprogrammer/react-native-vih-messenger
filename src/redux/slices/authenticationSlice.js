import {createSlice} from '@reduxjs/toolkit';

const authenticationSlice = createSlice({
  name: 'authenticationSlice',
  initialState: {
    activeTab: '1',
    bottomNavigation: true,
    chats: [],
    channels: null,
    closeSDK: true,
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
    setChannels: (state, action) => {
      state.channels = action.payload;
    },
    setCloseSDK: (state, action) => {
      state.closeSDK = action.payload;
    },
  },
});
export const {
  setActiveTab,
  setBottomNavigation,
  setChats,
  setChannels,
  setCloseSDK,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
