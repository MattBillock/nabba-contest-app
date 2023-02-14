import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedContestId: -1
};

export const selectedContestIdSlice = createSlice({
    name: 'selectedContestId',
    initialState,
    reducers: {
        contestSelected: (state, contestId) => {
            // prevent changing when a contest is selected unless it is explicitly reset with the flag value (-1)
            if(state.selectedContestId < 0 || contestId.payload < 0)
            {
                return {
                    ...state,
                    selectedContestId: contestId.payload
                };
            }
        }
    }
})


export const { contestSelected } = selectedContestIdSlice.actions

export const selectSelectedContestId = state => state.selectedContestId.selectedContestId;


export default selectedContestIdSlice.reducer

