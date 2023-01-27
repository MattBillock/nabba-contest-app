import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const CONTEST_LIST_URL = "https://nabba-mobile-app.sfo3.cdn.digitaloceanspaces.com/contest_list_mapping.json"

const initialState = {
  bandList: [],
  performanceSchedule: {},
  venueDetails: {},
  partnerDetails: {},
  status: 'idle',
  error: null
}

export const contestDataSlice = createSlice({
    name: 'contestData',
    initialState,
    reducers: {
        newContestData: (state, newData) => {
            return {
                ...state,
                contestData: {
                  bandList: newData.bandList,
                  performanceSchedule: newData.performanceSchedule,
                  venueDetails: newData.venueDetails,
                  partnerDetails: newData.partnerDetails
                }
            };
        }
    },
    extraReducers: builder => {
      builder
        .addCase(fetchContestData.pending, (state, action) => { 
          return {
            ...state,
            status: 'loading'
          }
        })
        .addCase(fetchContestData.fulfilled, (state, action) => {
          return {
              ...action.payload,
              status: 'succeeded'
            }
        })
        .addCase(fetchContestData.rejected, (state, action) => { 
          return {
            ...state,
              
            status: 'rejected',
            error: action.error.message
          }
        })
    }
})


export const { newContestData } = contestDataSlice.actions

export const selectBandList = state => { 
  return state.contestData.bandList;
}

export const selectPerformanceSchedule = state => {
  return state.contestData.performanceSchedule;
}

export const selectVenueDetails = state => {
  return state.contestData.venueDetails;
}

export const selectPartnerDetails = state => {
  return state.contestData.partnerDetails;
}

export const fetchContestData = createAsyncThunk('contestData/fetchData', async (file_path) => {

    const response = await fetch(file_path, {
          method: 'get',
          headers: new Headers({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          })
        })
    return response.json()
  })

export default contestDataSlice.reducer

