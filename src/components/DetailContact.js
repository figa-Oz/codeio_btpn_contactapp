import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { filter } from 'lodash'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        getDetail: state.contacts.getDetail,
        getErrorDetail: state.contacts.getErrorDetail
    }
}

const tdStyle =  {
    width: "25%"
}

const editBtnStyle = {
    borderRadius:"10% 40%",
    position:"absolute",
    marginLeft: "-30px"
}

class DetailContact extends Component {

    // isValidURL = (string) => {
    //     var res = toString(string).includes(/.*\.(gif|jpe?g|bmp|png)$/g);
    //     return (res !== null)
    // }

    filteredKey = (string) => {
        let lowString = toString(string).toLowerCase()
        return lowString.search('.png' || '.jpg' || '.jpeg' || '.gif')
    }

    render() {
        console.log("this.props.getDetail.photo2", this.props.getDetail.photo);

        let UrlImg = "javascript di"
        // console.log("filtered Search", UrlImg.search("z" || "x"));
        return (
            <Card>
                <div className="text-center">
                    <Card.Img
                        className="rounded"
                        src={this.props.getDetail.photo}
                        alt={
                            this.filteredKey(this.props.getDetail) === -1 ? 
                            "Your Image Url Not Valid" :
                            this.props.getDetail.photo
                        }
                    />
                </div>

                <Card.Body>
                    <Table striped bordered hover responsive style={{ position:"relative" }}>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Contact Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>{this.props.getDetail.firstName}</td>
                                <td style={tdStyle}>{this.props.getDetail.lastName}</td>
                                <td style={tdStyle}>{this.props.getDetail.age}</td>
                                <td style={tdStyle}>{this.props.getDetail.id}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="text-center">
                        <Link to={"/edit/" + this.props.getDetail.id} style={{margin:"5px"}}>
                            <Button size="md" variant="info" style={editBtnStyle}><FontAwesomeIcon icon={faEdit} /> Edit</Button>
                        </Link>

                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default connect(mapStateToProps, null)(DetailContact)