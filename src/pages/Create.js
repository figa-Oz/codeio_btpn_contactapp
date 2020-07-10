import React, { Component, useState } from 'react'
import FormComponent from '../components/FormComponent'
import { Jumbotron, Container, Alert, Button, Toast, ToastBody, Row, Col } from 'react-bootstrap';
import InfoNav from '../components/InfoNav';
import { ActionPost } from '../actions/contactAction'
import { connect, reset } from 'react-redux'
import ToastComponent from '../components/ToastComponent'

const mapStateToProps = (state) => {
    return {
        postContact: state.contacts.postContact.message,
        postStatus: state.contacts.postStatus,
        postMsg: state.contacts.postMsg,
        postError: state.contacts.postError 
    }
}

class Create extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible : false
        }
    }

    handleSubmit = (data, dispatch) => {
        this.props.dispatch(ActionPost(data))
        this.setState({visible:true},()=>{
            window.setTimeout(()=>{
                this.setState({visible:false})
            },3000)}
        )
        // dispatch(reset("FieldArrays"))
    }

    render() {

        const titlePage = "Add Page"
        
        return (
            <Container>
                <InfoNav title={titlePage} />
                {this.state.visible === false ? <span></span> : 
                    <ToastComponent status={this.props.postMsg} msg={this.props.postContact} />
                }
                <Jumbotron>
                    <FormComponent onSubmit={this.handleSubmit} />
                </Jumbotron>
            </Container>
        )
    }
}

export default connect(mapStateToProps, null)(Create)
