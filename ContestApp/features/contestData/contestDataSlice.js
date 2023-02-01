import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const CONTEST_LIST_URL = "https://nabba-mobile-app.sfo3.cdn.digitaloceanspaces.com/contest_list_mapping.json"

const initialState = {
  band_list: [],
  performance_schedule: {},
  venue_details: {},
  partner_details: {},
  status: 'idle',
  error: null,
  default_stage: '',
}

export const contestDataSlice = createSlice({
    name: 'contestData',
    initialState,
    reducers: {
        newContestData: (state, newData) => {
          let result_array = new Set();
          let keys = Object.keys(newData.performance_schedule)
          keys.forEach(key => {
            let performance_array = newData.performance_schedule[key];
            performance_array.forEach(performance => {
              result_array.add(performance.stage)
            })
          })
          return {
            ...state,
            contestData: {
              band_list: newData.band_list,
              performance_schedule: newData.performance_schedule,
              venue_details: newData.venue_details,
              partner_details: newData.partner_details,
              default_stage: [...result_array][0],
            }
          }
        },
        newDefaultStage: (state, newStage) => {
          return {
            ...state,
            default_stage: newStage.payload

          }
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
          let result_array = new Set();
          let keys = Object.keys(action.payload.performance_schedule)
          keys.forEach(key => {
            let performance_array = action.payload.performance_schedule[key];
            performance_array.forEach(performance => {
              result_array.add(performance.stage)
            })
          })
          return {
              ...action.payload,
              status: 'succeeded',
              default_stage: [...result_array][0]
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


export const { newContestData, newDefaultStage } = contestDataSlice.actions

export const selectBandList = state => { 
  return state.contestData.band_list;
}

export const selectPerformanceSchedule = state => {
  return state.contestData.performance_schedule;
}

export const selectVenueList = state => {
  let result_array = new Set();
  let keys = Object.keys(state.contestData.performance_schedule)
  keys.forEach(key => {
    let performance_array = state.contestData.performance_schedule[key];
    performance_array.forEach(performance => {
      result_array.add(performance.stage)
    })
  })
  
  return [...result_array];
}

export const selectDefaultVenue = state => {
  return state.contestData.default_stage;
}

export const selectContestDates = state => {
  return Object.keys(state.contestData.performance_schedule);

}

export const selectVenueDetails = state => {
  return state.contestData.venue_details;
}

export const selectPartnerDetails = state => {
  return state.contestData.partner_details;
}

export const selectPerformancesForStage = state => {
  let keys = Object.keys(state.contestData.performance_schedule);
  let return_value = {}
  keys.forEach(key => {
    return_value[key] = state.contestData.performance_schedule[key].filter(entry => entry.stage === state.contestData.default_stage)
  })
  return return_value
}


export const selectPerformancesByStage = state => {
  let retval = []
  let venue_array = new Set();
  let keys = Object.keys(state.contestData.performance_schedule)
  keys.forEach(key => {
    let performance_array = state.contestData.performance_schedule[key];
    performance_array.forEach(performance => {
      venue_array.add(performance.stage)
    })
  })

  venue_array.forEach(venue => {
    retval[venue] = {}
    keys.forEach(key => {
      retval[venue][key] = state.contestData.performance_schedule[key].filter(item => item.stage === venue) 
    })
  })
  return retval
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

