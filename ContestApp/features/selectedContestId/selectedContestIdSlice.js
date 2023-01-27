import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedContestId: -1
};

export const selectedContestIdSlice = createSlice({
    name: 'selectedContestId',
    initialState,
    reducers: {
        contestSelected: (state, contestId) => {
            return {
                ...state,
                selectedContestId: contestId.payload
            };
        }
    }
})


export const { contestSelected } = selectedContestIdSlice.actions

export const selectSelectedContestId = state => state.selectedContestId.selectedContestId;


export default selectedContestIdSlice.reducer

