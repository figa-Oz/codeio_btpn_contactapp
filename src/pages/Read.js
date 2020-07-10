import React, { Component } from 'react'
import ListContact from '../components/ListContact'
import { Container, Button, Row, Col, Navbar } from 'react-bootstrap'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { ActionGet } from '../actions/contactAction'
import InfoNav from '../components/InfoNav'

class Read extends Component {
    componentDidMount() {
        this.props.dispatch(ActionGet())
    }

    render() {

        const titlePage = "Hello you in home page now"
        
        return (
            <Container>
                <InfoNav title={titlePage} />
                <br/>
                
                <Link to="/add" className="float-left">
                    <Button variant="dark" size="md">
                        <FontAwesomeIcon icon={faAddressBook} /> Add New Contact
                    </Button>
                </Link>

                <ListContact/>
            </Container>
        )
    }
}

export default connect()(Read)
