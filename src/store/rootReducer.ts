import { combineReducers } from '@reduxjs/toolkit'
import msgSlice from './msgSlice'

const combineReducer = combineReducers ({
    msgSlice
});

export type StateApp = ReturnType<typeof combineReducer>
export default combineReducer