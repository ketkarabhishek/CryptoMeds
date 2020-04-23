import { SET_LOGIN, SET_WEB3, SET_CONTRACT, SET_ACCOUNT, SET_USER, SET_SIGN, ADD_PRESCRIPTION, ADD_REPORT, ADD_ALLERGY, ADD_CONDITION, TEST_ACTION } from "../actionTypes";
import {DUMMY_RECORD} from '../../constants/HealthRecordModels'

const initialState = {
    isLoggedIn: false,
    web3: null,
    contract: null,
    account: null,
    hasMetamask: !window.ethereum || !window.ethereum.isMetaMask ? false : true,
    userData: DUMMY_RECORD,
    sign: null,
    test: 0,
}

export default function(state = initialState, action){
    switch (action.type) {

        case SET_LOGIN:
            return {...state, isLoggedIn: action.payload}

        case SET_WEB3:
            return {...state, web3: action.payload}
        
        case SET_CONTRACT:
            return {...state, contract: action.payload}

        case SET_ACCOUNT:
            return {...state, account: action.payload}

        case SET_USER:
            return {...state, userData: action.payload}

        case SET_SIGN:
            return {...state, sign: action.payload}

        case ADD_PRESCRIPTION:
            return{
                ...state,
                userData: {
                    ...state.userData,
                    ...state.userData.prescriptions.push(action.payload) 
                }
            }

        case ADD_REPORT:
            return{
                ...state,
                userData: {
                    ...state.userData,
                    ...state.userData.labReports.push(action.payload) 
                }
            }

        case ADD_ALLERGY:
            return{
                ...state,
                userData: {
                    ...state.userData,
                    ...state.userData.allergies.push(action.payload) 
                }
            }

        case ADD_CONDITION:
            return{
                ...state,
                userData: {
                    ...state.userData,
                    ...state.userData.conditions.push(action.payload) 
                }
            }

        case TEST_ACTION:
            return{
                ...state,
                test: state.test + 1
            }
    

        default:
            return state;
    }
}