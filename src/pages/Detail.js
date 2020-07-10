import React, { Component } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import BackButton from '../components/BackButton'
import { connect } from 'react-redux'
import { ActionDetail } from '../actions/contactAction'
import DetailContact from '../components/DetailContact'
import InfoNav from '../components/InfoNav'

class Detail extends Component {
    componentDidMount() {
        this.props.dispatch(ActionDetail(this.props.match.params.id))
    }

    render() {

        const titlePage = "Detail Contact"
        // 
        return (
            <Container>
                <InfoNav title={titlePage} />
                <br/>
                
                <Jumbotron className="pt-5">
                    <DetailContact />
                </Jumbotron>
                <BackButton />
            </Container>
        )
    }
}

export default connect()(Detail)
