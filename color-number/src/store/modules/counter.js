//액션
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'
const CHANGE_COLOR = 'counter/CHAGE_COLOR'
//액션생성
export const increment = () => ({type:INCREMENT})
export const decrement = () => ({type:DECREMENT})
export const changeColor = (color) => ({type:CHANGE_COLOR, color})

//리듀서
const initialState = {
    number : 0 , color:'pink'
}
const counter = (state = initialState , action ) => {
    switch ( action.type ) {
        case INCREMENT: 
            return {
                ...state ,
                number : state.number +1
            }
        case DECREMENT: 
            return {
                ...state ,
                number : state.number -1
            }
        case CHANGE_COLOR: 
            return {
                ...state ,
                color: action.color 
            }
        default :
            return state     
    }
}
export default counter