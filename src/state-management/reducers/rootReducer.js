import { combineReducers } from 'redux';
import axiosReducerThunk from './weatherReducerThunk';

export default combineReducers({
    weatherThunkReducer:axiosReducerThunk
})
