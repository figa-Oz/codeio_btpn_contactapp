import React, { Component } from 'react'
import { Navbar, Row, Col } from 'react-bootstrap'
import BackButton from './BackButton';

export default class InfoNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" className="justify-content-between" >
                <div sm={6} className="justify-content-start">
                    <h1 className="text-white">{this.props.title}</h1>
                </div>

                {
                    this.props.title.includes("home") ? <span></span> : 
                    <div sm={6} className="justify-content-end">
                        <BackButton className="text-right" />
                    </div>
                }
            </Navbar>
        )
    }
}

