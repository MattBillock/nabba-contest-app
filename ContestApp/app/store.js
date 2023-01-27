import { configureStore } from '@reduxjs/toolkit'
import contestListReducer from '../features/contestList/contestListSlice'
import selectedContestIdReducer from '../features/selectedContestId/selectedContestIdSlice'
import contestDataReducer from '../features/contestData/contestDataSlice'
//import counterReducer from '../features/counter/counterSlice'


// We have to support the following data:
/*
1 - load contest list file
2 - active contest selected
3 - load contest data file

Can later expand to support caching and offline storage of data, for now just brute force it.

*/
export default configureStore({
  reducer: {
    contestList: contestListReducer,
    selectedContestId: selectedContestIdReducer,
    contestData: contestDataReducer,
  }
})