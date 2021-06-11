import { Http } from '../../config/globalConfig'
import { setUserToken } from './actionauth'

export const actionTypes = {
    CHANGE: 'CHANGE',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',

}

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const  registerError = (payload) => ({
    type: actionTypes.ERROR,
    payload
})

export const  success = (payload) => ({
    type: actionTypes.SUCCESS,
    payload
})

export const registerUser = (data) => {
    return dispatch => {
        return Http.post('/register', data)
        .then(res => {
            if(typeof res !== 'undefined'){
                if(res.data.error){
                    dispatch(registerError(res.data.error))
                }

                if(res.data.success){

                    dispatch(setUserToken(res.data.token));
                    dispatch(success(true)); 

                }



            }

        })
        

    }

}
