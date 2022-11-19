import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  announcesToFilter: null,
  origin: null,
  destination: null,
  travelTimeInformation: null,
  userPhoneNumber: null,
  userName: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setAnnouncesToFilter: (state, action) => {
      state.announcesToFilter = action.payload;
    },
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
    setUserPhoneNumber: (state, action) => {
      state.userPhoneNumber = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const {
  setAnnouncesToFilter,
  setOrigin,
  setDestination,
  setTravelTimeInformation,
  setUserPhoneNumber,
  setUserName,
} = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectAnnouncesToFilter = (state) => state.nav.announcesToFilter;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;
export const selectUserPhoneNumber = (state) => state.nav.userPhoneNumber;
export const selectUserName = (state) => state.nav.setUserName;

export default navSlice.reducer;
