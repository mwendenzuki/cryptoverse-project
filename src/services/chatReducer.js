import { configureStore } from "@reduxjs/toolkit"
const redux = require('redux')
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED"
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED"
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED"
const FETCH_MESSAGES_REQUESTED = "FETCH_MESSAGES_REQUESTED"
const FETCH_MESSAGES_SUCCEEDED = "FETCH_MESSAGES_SUCCEEDED"
const FETCH_MESSAGES_FAILED = "FETCH_MESSAGES_FAILED"

function fetchUsersRequest() {
    return{
        type: FETCH_USERS_REQUESTED
    }
}

function fetchUsersSuccess(username) {
    return{
        type: FETCH_USERS_SUCCEEDED,
        payload: username
    }
}

function fetchUsersFailed (error) {
    return{
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

function fetchMessagesRequest() {
    return{
        type: FETCH_MESSAGES_REQUESTED
    }
}

function fetchMessagesSuccess(message) {
    return{
        type: FETCH_USERS_SUCCEEDED,
        payload: message
    }
}

function fetchMessagesFailed(error) {
    return{
        type: FETCH_USERS_FAILED,
        payload: error
    }
}
const initialUserState = {
    username: ""
}

const initialMessageState = {
    message: ""
}

const userReducer = (state = initialUserState, action) => {
    switch (action.type){
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                username: action.payload,
                error: ''
            }
        case FETCH_MESSAGES_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload,
            }
            default:
                return state
        }
    }

    const messageReducer = (state = initialMessageState, action) => {
        switch(action.type) {
            case FETCH_MESSAGES_REQUESTED:
                return {
                    ...state,
                    loading: true,
                }
            case FETCH_MESSAGES_SUCCEEDED:
            return {
                loading: false,
                username: action.payload,
                error: ''
            }
            case FETCH_MESSAGES_FAILED:
                return {
                    loading: false,
                    username: [],
                    state: action.payload
                }
                default: 
                return state
        }
    }

const rootReducer = combineReducers({
    users: userReducer,
    message: messageReducer,
})
    
const store = configureStore(rootReducer)

const unsubscribe = store.subscribe( () => console.log("updated state", store.getState()))

const actions = bindActionCreators({fetchUsersSuccess, fetchUsersRequest, fetchUsersFailed, fetchMessagesRequest, fetchMessagesSuccess, fetchMessagesFailed }, store.dispatch)
actions.messageReducer()
actions.userReducer()

unsubscribe()