//액션
const CHANGE_COLOR = 'colorReducer/CHANGE_COLOR'

//액션생성
export const change_color = (color) => ({type:CHANGE_COLOR, color})

//리듀서 - 순수함수
const initialState = { color:'pink' }
const colorReducer = (state = initialState , action) => {
   switch( action.type ) {
       case CHANGE_COLOR:
           return {
               ...state, 
               color : action.color 
           }   
       default:
           return state 
   }
}
export default colorReducer