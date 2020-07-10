import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import BackButton from '../components/BackButton'

export default class Delete extends Component {
    render() {
        return (
            <Container>
                <BackButton/>
                Delete
            </Container>
        )
    }
}
