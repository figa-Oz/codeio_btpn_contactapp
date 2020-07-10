import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { contactValidation } from '../validations/contactValidation';
import { Button, Form, Col, Row } from 'react-bootstrap';

const renderField = ({
    input,
    label,
    type,
    placeholder,
    disabled,
    readOnly ,
    meta: { touched, error, warning }
}) => (
    <Form.Group as={Row}>
        <Form.Label column sm="2">{label}</Form.Label>
        <Col sm="10">
            <Form.Control
                {...input}
                type={type}
                placeholder={placeholder} 
                disabled={disabled}
                readOnly={readOnly}
                id={label}
            />
            {touched && error && <p className="text-danger">{error}</p>}
        </Col>

    </Form.Group>
)

/*Edit Form */
const mapStateToProps = (state) => {
    return {
        initialValues: {
            firstName: state.contacts.getDetail.firstName,
            lastName: state.contacts.getDetail.lastName,
            age: state.contacts.getDetail.age,
            photo: state.contacts.getDetail.photo
        }
    }
}
/*Edit Form */

class FieldArraysForm extends Component {

    render() {
        
        const { handleSubmit, submitting, invalid, pristine } = this.props
        
        return (
            <Form onSubmit={handleSubmit}>
                <Field 
                    name="firstName"
                    label="First Name"
                    placeholder="Insert Your First Name" 
                    component={renderField} 
                    type="text"
                />

                <Field 
                    name="lastName"
                    label="Last Name"
                    placeholder="Insert Your Last Name" 
                    component={renderField} 
                    type="text"
                />

                <Field 
                    name="age"
                    label="Age"
                    placeholder="Insert Your Age" 
                    component={renderField} 
                    type="number"
                />

                <Field 
                    name="photo"
                    label="Photo"
                    placeholder="Insert Your Photo" 
                    component={renderField} 
                    type="text"
                />

                {
                    this.props.postMsg ? 
                    <Button 
                        type="submit"
                        variant="info" 
                        size="lg"
                        block
                    >Submit</Button> : 
                    <Button 
                        type="submit" 
                        disabled={invalid|| submitting || pristine}
                        className={invalid|| submitting || pristine ? "disabled" : ""}
                        variant="info" 
                        size="lg"
                        block
                    >Submit</Button>
                }
            </Form>
        )
    }
}
  
FieldArraysForm = reduxForm({
    form: 'FieldArrays',
    enableReinitialize: true,
    validate: contactValidation
})(FieldArraysForm)
  
export default connect(mapStateToProps, null)(FieldArraysForm)