import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

//const CONTEST_LIST_URL = "https://nabba-mobile-app.sfo3.cdn.digitaloceanspaces.com/dev/contest_list_mapping_dev.json"
const CONTEST_LIST_URL = "https://nabba-mobile-app.sfo3.cdn.digitaloceanspaces.com/contest_list_mapping.json"

const initialState = {
    contestList: [],
    status:'idle',
    error:null
}

export const contestListSlice = createSlice({
    name: 'contestList',
    initialState,
    reducers: {
        newContestList: (state, newList) => {
            return {
                ...state,
                contestList: {
                  ...state.contestList,
                  contestList: newList
                }
            };
        }
    },
    extraReducers: builder => {
      builder
        .addCase(fetchList.pending, (state, action) => { 
          return {
            ...state,
            status: 'loading'
          }
        })
        .addCase(fetchList.fulfilled, (state, action) => {
          return {
              ...state,
              contestList: action.payload.contests || [],
              status: 'succeeded'
            }
        })
        .addCase(fetchList.rejected, (state, action) => { 
          return {
            ...state,
              
            status: 'rejected',
            error: action.error.message
          }
        })
    }
})


export const { newContestList } = contestListSlice.actions

export const selectContestList = state => { 
  return state.contestList.contestList;
}

export const selectContestListStatus = state => {
  return state.contestList.status;
}

export const selectContestById = (state, contestId) => {
  return state.contestList.contestList.find(contest => contest.id === contestId)
}

export const fetchList = createAsyncThunk('contestList/fetchList', async () => {

    const response = await fetch(CONTEST_LIST_URL, {
          method: 'get',
          headers: new Headers({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          })
        })
    return response.json()
  })

export default contestListSlice.reducer

