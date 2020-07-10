export const contactValidation = (values) => {
    const errors = {}
    const nullMsg = "Field is required"

    if(!values.firstName) {
        errors.firstName = nullMsg
    }else if(!/^[a-zA-Z ]{1,}$/i.test(values.firstName)){
        errors.firstName = "field must alphabet (no number)"
    }

    if(!values.lastName) {
        errors.lastName = nullMsg
    }else if(!/^[a-zA-Z ]{2,}$/i.test(values.lastName)){
        errors.lastName = "field must alphabet (no number)"
    }

    if(!values.age) {
        errors.age = nullMsg
    }else if(!/^[1-9]{1,2}$/i.test(values.age)){
        errors.age = "field must number, min 1 digit max 2 digit"
    }

    if (!values.photo) {
        errors.photo = nullMsg
    }

    return errors
}