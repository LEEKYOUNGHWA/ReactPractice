import { createAction, handleActions } from 'redux-actions';

//액션
const INCREMENT = 'counter/INCREMENT'
const DECREMENT ='counter/DECREMENT'
const CHANGE_COLOR ='counter/CHANGE_COLOR'

//액션생성
export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)
export const changeColor = createAction(CHANGE_COLOR, color => color)


const initialState = { 
	number : 0,
	color : 'skyblue'
}
export default handleActions( 
	{
		[INCREMENT] : (state,action) => ({
			...state,
			number : state.number + 1
		}),
		[DECREMENT] : (state, action) => ({
			...state,
			number : state.number - 1
		}),
		[CHANGE_COLOR] : (state, action) => ({
			...state,
			color : action.payload
		})
	},initialState
)