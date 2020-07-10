import axios from 'axios'

export const GET_CONTACTS = "GET_CONTACTS"
export const GET_DETAIL = "GET_DETAIL"
export const POST_CONTACT = "POST_CONTACT"
export const PUT_CONTACT = "PUT_CONTACT"
export const DEL_CONTACT = "DEL_CONTACT"

export const ActionGet = () => {
    return dispatch => {
        axios.get('https://simple-contact-crud.herokuapp.com/contact')
        .then((response) => {
            dispatch({
                type: GET_CONTACTS,
                payload: {
                    data: response.data.data,
                    errorMsg: false
                }
            })
            // console.log(response);
        })
        .catch((error) => {
            dispatch({
                type: GET_CONTACTS,
                payload: {
                    data: error.response.data,
                    errorMsg: error.errorMsg
                }
            })
            // console.log(error);
        });
    }
}

export const ActionPost = (data) => {
    console.log("data", data);
    
    return dispatch => {
        axios.post('https://simple-contact-crud.herokuapp.com/contact', data)
        .then((response) => {
            dispatch({
                type: POST_CONTACT,
                payload: {
                    data: response.data,
                    status: response.status,
                    statusMsg: response.statusText,
                    errorMsg: false
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: POST_CONTACT,
                payload: {
                    data: error.response.data,
                    errorMsg: error.errorMsg
                }
            })
            // console.log(error);
        });
    }
}

export const ActionDetail = (id) => {
    return dispatch => {
        axios.get('https://simple-contact-crud.herokuapp.com/contact/' + id)
        .then((response) => {
            dispatch({
                type: GET_DETAIL,
                payload: {
                    data: response.data.data,
                    errorMsg: false
                }
            })
            // console.log(response.data.data);
        })
        .catch(function (error) {
            dispatch({
                type: GET_DETAIL,
                payload: {
                    data: error.response.data,
                    errorMsg: error.errorMsg
                }
            })
            // console.log("err", error);
        });
    }
}

export const ActionPut = (data, id) => {
    return dispatch => {
        axios.put('https://simple-contact-crud.herokuapp.com/contact/' + id, data)
        .then((response) => {
            dispatch({
                type: PUT_CONTACT,
                payload: {
                    data: response.data.data, // Obj
                    errorMsg: false
                },
                status: {
                    status: response.status, // 201
                    statusText: response.statusText, // "Created"
                    message: response.data.message // "Contact edited"
                }
            })
            // console.log("response put", response);
        })
        .catch(function (error) {
            dispatch({
                type: PUT_CONTACT,
                payload: {
                    data: error.response.data,
                    errorMsg: error.errorMsg
                }
            })
            // console.log("err put", error);
        });
    }
}

export const ActionDelete = (id) => {
    return dispatch => {
        axios.delete('https://simple-contact-crud.herokuapp.com/contact/' + id)
        .then((response) => {
            dispatch({
                type: DEL_CONTACT,
                payload: {
                    data: response.data.data, // Obj
                    errorMsg: false
                },
                status: {
                    status: response.status, // 201
                    statusText: response.statusText, // "Created"
                    message: response.data.message // "Contact edited"
                }
            })
            // console.log("response del", response);
        })
        .catch(function (error) {
            dispatch({
                type: DEL_CONTACT,
                payload: {
                    data: error.response.data,
                    errorMsg: error.errorMsg
                },
                status: {
                    status: error.response.status,
                    statusText: error.response.statusText,
                    message: error.response.data.message
                }
            })
            // console.log("err delete", error.response);
        });
    }
}