import { createAction, handleActions } from "redux-actions"

const INSERT ='colorList/INSERT'
const UPDATE ='colorList/UPDATE'
const REMOVE ='colorList/REMOVE'
const CHANGE_INPUT ='colorList/CHANGE_INPUT'

//액션생성
let id =1
export const insert = createAction(INSERT, color => ({id:id++,color }))
export const update = createAction(UPDATE, id=>id)
export const remove = createAction(REMOVE,id=>id)
export const changeInput = createAction(CHANGE_INPUT,text=>text)

//초기값
const initialState = {
    input : '', list :[]
    //list : [{id : 1, color : 'green' }]
}

//리듀서
export default handleActions (
    {
        [INSERT] : (state,action) => ({
            ...state,
            list : state.list.concat({
                id:action.payload.id,
                color:action.payload.color,
                opacity: 1
            })
        }),
        [UPDATE] : (state,action) =>({
            ...state,
            list : state.list.map(item=>{
                if(item.id===action.id){
                    return {
                        ...item,
                        opacity:item.opacity-0.1
                    }
                }else {
                    return item
                }
            })
        }),
        [REMOVE] : (state,action) => ({
            ...state,
            list : state.list.filter(item=>item.id ===action.payload)
        }),
        [CHANGE_INPUT] : (state,action) =>({
            ...state, 
            input : action.payload})
    },initialState
    )