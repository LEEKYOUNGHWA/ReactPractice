import {createAction, handleActions} from 'redux-actions'
//액션
const INCRESE = 'counter/INCRESE'
const DECRESE = 'counter/DECRESE'
const SET_STEP = 'counter/SET_STEP'

//액션생성

export const increse = createAction(INCRESE)
export const decrese = createAction(DECRESE)
export const setStep = createAction(SET_STEP,step=>step)

// export const increse = () => ({type:INCRESE})
// export const decrese = () => ({type:DECRESE})
// export const setStep = (step) => ({type:SET_STEP,step})

//초기값
const initialState ={
    number :  1 , step : 1
}

export default handleActions(
    {
        [INCRESE] : (state,action)=> ({
            ...state,
            number :  state.number + 1}),
        [DECRESE] : (state, action)=> ({
            ...state,
            number : state.number -1
        }),
        [SET_STEP] : (stae,action)=> ({
            ...state,
            step : action.payload
        })
    },
    initialState
)



// const counter = ( state = initialState, action) => {
//     switch(action.type){
//         case  INCRESE :
//             return  {
//                 ...state,
//                 number : state.number + state.step
//             }
//         case DECRESE : 
//             return {
//                 ...state,
//                 number : state.number - state.step
//             }
//         case SET_STEP : 
//             return {    
//                 ...state,
//                 step : action.step
//             }
//         default : 
//         return state
//     }
// }

//export default counter