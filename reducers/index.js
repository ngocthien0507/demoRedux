import { combineReducers } from 'redux';
import todos from './todosReducer';
import visibilityFilter from './visibilityFilterReducer';


const reducer =  combineReducers({
    todos,
    visibilityFilter,
})

export default reducer;