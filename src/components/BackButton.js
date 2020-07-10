import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHome } from '@fortawesome/free-solid-svg-icons'

export default class BackButton extends Component {
    render() {
        return (
            <Link to="/">
                <Button variant="outline-light" size="sm">
                    <FontAwesomeIcon icon={faHome} /> &nbsp; Home-Back &nbsp;  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
            </Link>
        )
    }
}
