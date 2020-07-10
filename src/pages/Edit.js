import React, { Component } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import InfoNav from '../components/InfoNav'
import FormComponent from '../components/FormComponent'
import { ActionDetail, ActionPut } from '../actions/contactAction'
import { connect } from 'react-redux'
import ToastComponent from '../components/ToastComponent'
import { Redirect } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        getDetail: state.contacts.getDetail,
        getErrorDetail: state.contacts.getErrorDetail,

        putStatusCode: state.contacts.putStatusCode,
        putStatusText: state.contacts.putStatusText,
        putStatusMsg: state.contacts.putStatusMsg
    }
}

class Edit extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible : false,
            redirect: false
        }
    }
    
    componentDidMount() {
        this.props.dispatch(ActionDetail(this.props.match.params.id))
    }

    handleSubmit = (data) => {
        this.props.dispatch(ActionPut(data, this.props.match.params.id))
        this.setState({visible:true},()=>{
            window.setTimeout(()=>{
                this.setState({visible:false, redirect: true})
            },3000)}
        )
        // dispatch(reset("FieldArrays"))
    }

    render() {
        const titlePage = "Edit Page"

        if (this.state.redirect) {
            return <Redirect to={"/detail/" + this.props.match.params.id }/>
        }

        return (
            <Container>
                <InfoNav title={titlePage} />
                {this.state.visible === false ? <span></span> : 
                    <ToastComponent status={this.props.putStatusText} msg={this.props.putStatusMsg} />
                }
                <Jumbotron>
                    <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
                </Jumbotron>
            </Container>
        )
    }
}

export default connect(mapStateToProps, null)(Edit)