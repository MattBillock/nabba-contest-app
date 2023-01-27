import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const CONTEST_LIST_URL = "https://nabba-mobile-app.sfo3.cdn.digitaloceanspaces.com/contest_list_mapping.json"

const initialState = {
  band_list: [],
  performance_schedule: {},
  venue_details: {},
  partner_details: {},
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
                  band_list: newData.band_list,
                  performance_schedule: newData.performance_schedule,
                  venue_details: newData.venue_details,
                  partner_details: newData.partner_details
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
  return state.contestData.band_list;
}

export const selectPerformanceSchedule = state => {
  return state.contestData.performance_schedule;
}

export const selectVenueDetails = state => {
  return state.contestData.venue_details;
}

export const selectPartnerDetails = state => {
  return state.contestData.partner_details;
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

