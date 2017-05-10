import { combineReducers } from 'redux';
import MyButtonReducer from './MyButtonReducer';
import MenuReducer from './MenuReducer';


const myApp = combineReducers({
    MyButtonReducer,
    MenuReducer
})

export default myApp