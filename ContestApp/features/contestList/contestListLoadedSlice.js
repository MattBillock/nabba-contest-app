import { createSlice } from '@reduxjs/toolkit'

const initialState = false;

export const contestListLoadedSlice = createSlice({
    name: 'contestListLoaded',
    initialState,
    reducers: {
        setContestListLoaded: (state, loaded) => {
            return {
                ...state,
                contestListLoaded: loaded
            };
        }
    }
})


export const { setContestListLoaded } = contestListLoadedSlice.actions

export const selectContestListLoaded = state => state.contestListLoaded

export default contestListLoadedSlice.reducer

