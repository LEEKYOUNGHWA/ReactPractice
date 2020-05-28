//액션
const GREEN = 'colorReducer/GREEN'
const YELLOW = 'colorReducer/YELLOW'
const BLUE = 'colorReducer/BLUE'
const PINK = 'colorReducer/PINK'
const SKYBLUE = 'colorReducer/SKYBLUE'

//액션생성
export const green = () => ({type:GREEN})
export const yellow = () => ({type:YELLOW}) 
export const blue = () => ({type:BLUE}) 
export const pink = () => ({type:PINK}) 
export const skyblue = () => ({type:SKYBLUE}) 


//리듀서 - 순수함수
const initialState = { color:'pink' }
const colorReducer = (state = initialState , action) => {
   switch( action.type ) {
       case GREEN:
           return {
               ...state, 
               color :'green'
           }
       case YELLOW:
           return {
              ...state,
              color :'yellow'
           }    
       case BLUE:
           return {
               ...state,
               color:'blue'           
            }    
       case PINK:
           return {
               ...state ,
               color:'pink'
           }     
           
       case SKYBLUE:
           return {
               ...state ,
               color:'skyblue'
           }     

       default:
           return state 
   }
}
export default colorReducer