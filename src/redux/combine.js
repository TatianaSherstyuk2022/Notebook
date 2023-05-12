import { combineReducers } from 'redux';
import noteReducer from './reducers'; 

const rootReducer = combineReducers({
  notes: noteReducer,
});

export default rootReducer;