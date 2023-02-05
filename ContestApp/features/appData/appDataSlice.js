import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activePage: "",
    activeBandId: -1,
};

export const appDataSlice = createSlice({
    name: 'appData',
    initialState,
    reducers: {
        changePage: (state, newPage) => {
            return {
                ...state,
                activePage: newPage.payload
            };
        },
        changeActiveBand: (state, newBand) => {
          return {
              ...state,
              activeBandId: newBand.payload
          };
        }
    }
})

export const selectActivePage = state => {
  return state.appData.activePage;
}

export const selectActiveBandId = state => {
  return state.appData.activeBandId;
}

export const {changePage, changeActiveBand} = appDataSlice.actions;

export default appDataSlice.reducer