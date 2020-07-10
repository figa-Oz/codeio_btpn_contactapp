// const { initial } = require("lodash");
import { GET_CONTACTS, POST_CONTACT, GET_DETAIL, PUT_CONTACT, DEL_CONTACT  } from '../actions/contactAction'

const initialState = {
    // GetAll
    getContacts: false,
    getErrors: false,

    // Post
    postContact: false,
    postStatus: false,
    postMsg: false,
    postError: false,

    // GetById
    getDetail: false,
    getErrorDetail: false,

    // Update
    putStatusCode: false,
    putStatusText: false,
    putStatusMsg: false,

    putContact: false,
    putError: false,

    title: "Contact App"
}

const contacts = (state = initialState, action) => {
    switch (action.type) {

        case GET_CONTACTS :
            return {
                ...state,
                getContacts: action.payload.data,
                getErrors: action.payload.errorMsg
            }
        
        case POST_CONTACT :
            return {
                ...state,
                postContact:action.payload.data,
                postStatus:action.payload.status,
                postMsg:action.payload.statusMsg,
                postError:action.payload.errorMsg
            }

        case GET_DETAIL :
            return {
                ...state,
                getDetail: action.payload.data,
                getErrorDetail: action.payload.errorMsg
            }

        case PUT_CONTACT :
            return {
                ...state,

                putStatusCode: action.status.status, // 201
                putStatusText: action.status.statusText, // "Created"
                putStatusMsg: action.status.message, // "Contact edited"

                putContact:action.payload.data,
                putError:action.payload.errorMsg
            }
        
        case DEL_CONTACT :
            return {
                ...state,
                delStatus: action.status.status,
                delStatusText: action.status.statusText,
                delMessage: action.status.message,
                
                delContact: action.payload.data,
                delError: action.payload.errorMsg
            }
        
        default :
            return state
    }
}

export default contacts