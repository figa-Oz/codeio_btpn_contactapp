import React, { Component } from 'react'
import { Toast, ToastBody } from 'react-bootstrap'

export default class ToastComponent extends Component {
    render() {
        return (
            <Toast style={{marginBottom:"0 !important"}} className="bg-dark text-white">
                <ToastBody>
                    <i className="mr-auto">{this.props.status}</i>
                    <hr className="bg-info" />
                    <h3>{this.props.msg}</h3>
                </ToastBody>
            </Toast>
        )
    }
}
