import { actionTypes } from '../actions/actionauth'
import initialState from './initialState'

const authReducer = (state = initialState.auth, action) =>{
    switch (action.type) {
        case actionTypes.CHANGE :
            return{
                ...state,
                credentials:{
                    ...state.credential,
                    ...action.payload

                }

            } 
            case actionTypes.GET_TOKEN :
                return{
                    
                        ...state,
                        ...action.token
    
                    }
            default:
                
            return state
    }

}

export default authReducer