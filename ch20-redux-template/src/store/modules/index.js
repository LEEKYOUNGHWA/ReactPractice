import {combineReducers} from 'redux'
import counter from './counter'
import colorList from './colorList'
import todos from './todos'

export default combineReducers ({
    counter ,
    colorList,
    todos
})