import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom'
import { Spinner, OverlayTrigger, Tooltip, DropdownButton, ButtonGroup, Modal, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { ActionDelete } from '../actions/contactAction';
import ToastComponent from './ToastComponent';

const initialState = { hidden: '' };

const { SearchBar } = Search;

const mapStateToProps = (state) => {
    return {
        getContacts: state.contacts.getContacts,
        getErrors: state.contacts.getErrors,

        delStatus: state.contacts.delStatus,
        delStatusText: state.contacts.delStatusText,
        delMessage: state.contacts.delMessage,
    }
}

const sizePerPageOptionRenderer = ({
    text,
    page,
    onSizePerPageChange
}) => (
    <li
        key={ text }
        role="presentation"
        className="dropdown-item paginHov"
    >
        <a
        href="#"
        tabIndex="-1"
        role="menuitem"
        data-page={ page }
        onMouseDown={ (e) => {
            e.preventDefault();
            onSizePerPageChange(page);
        } }
        style={ { color: 'white' } }
        >
        { text }
        </a>
    </li>
);
  
const options = {
    sizePerPageOptionRenderer
};

const ListContact = (props) => {

    const columns = [{
    //     dataField: 'id',
    //     text: 'No',
    //     sort: true,
    //     formatter: numbFormatter,
    //     headerStyle: () => {
    //         return {width: "5%"}
    //     },
    // }, {
        dataField: 'firstName',
        text: 'First Name',
        sort: true
    }, {
        dataField: 'lastName',
        text: 'Last Name',
        sort: true
    }, {
        dataField: 'age',
        text: 'Age',
        sort: true
    }, {
        dataField: 'photo',
        text: 'Photo',
        formatter: imgFormatter
    }, {
        dataField: 'action',
        text: 'Action',
        formatter: actionFormatter
    }];
    
    const defaultSorted = [{
        dataField: 'firstName',
        order: 'asc'
    }]
    
    // function numbFormatter(cell, row, index) {
    //     return <div>{index + 1}</div>
    // }
    
    function isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    };
    
    function imgFormatter(cell, row) {
        return (
            <OverlayTrigger
                key={row.id}
                overlay={
                    <Tooltip id={`tooltip-${row.id}`}>
                        {
                        isValidURL(cell) ? <img src={cell}/> : 
                        <img src="" alt="-Broken Image Url" />
                        }
                    </Tooltip>
                }
                >
                <Button variant="secondary">Show Image</Button>
            </OverlayTrigger>
        )
    }
    
    function actionFormatter(rowContent, row) {
        
        function Example() {
            const [smShow, setSmShow] = useState(false);
          
            return (
                <>
                <DropdownButton
                    id={"dropdown-button-drop-" + row.id}
                    drop="up"
                    variant="dark"
                    title="action"

                    className="btnDrp"
                >

                    <ButtonGroup>
                        <Link to={"detail/" + row.id} style={{margin:"5px"}}>
                            <Button variant="outline-light" size="sm">
                                <FontAwesomeIcon icon={faInfo} style={{color: "cyan"}} /> Detail
                            </Button>
                        </Link>
            
                        <Button style={{margin:"5px"}} onClick={() => setSmShow(true)} variant="outline-light" size="sm">
                            <FontAwesomeIcon icon={faTrash} style={{color: "red"}} /> Remove
                        </Button>
                    
                        <Link to={"edit/" + row.id} style={{margin:"5px"}}>
                            <Button variant="outline-light" size="sm">
                                <FontAwesomeIcon icon={faEdit} style={{color: "gold"}} /> Edit
                            </Button>
                        </Link>
                    </ButtonGroup>
                        
                </DropdownButton>
        
                <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                    className="text-center"
                >
                    <Modal.Body>
                    <h5 className="text-center">Delete this ?</h5>
                    <hr/>
                        <Row>
                            <Col sm={6}><Button variant="warning" onClick={() => setSmShow(false)}>No</Button></Col>
                            <Col sm={6}><Button variant="danger" onClick={() => handleRemove(row.id)}>Yes</Button></Col>
                        </Row>
                    </Modal.Body>
                </Modal>
                </>
            );

            function handleRemove(id) {
                setSmShow(false)
                props.dispatch(ActionDelete(id))
            }
        }

        return (
            <>
                <Example />
                {props.delStatus === 400 ? 
                    (props.delStatus === 200 ? 
                        <ToastComponent status={props.delStatus} msg={props.delMessage} />
                        : <ToastComponent status={props.delStatus} msg={props.delMessage} />) :
                    <span></span>
                }
            </>
        );
    }

    return (
        <div>
            { props.getContacts ?
            <ToolkitProvider
                bootstrap4 
                keyField='id'
                data={ props.getContacts } 
                columns={ columns } 
                defaultSorted={ defaultSorted }
                search
            >
            {(props) => (
                <div style={{marginTop: "-40px"}}>
                    <div className="float-right">
                        <SearchBar { ...props.searchProps } placeholder="search" />
                    </div>
                    
                    <BootstrapTable 
                        { ...props.baseProps } 
                        pagination={ paginationFactory(options) } 
                        bordered={ false }
                        hover
                    />

                </div>
            )}
            </ToolkitProvider> : 
                <div className="text-center">
                    { props.getErrors ? (<h2>{ props.getErrors }</h2>) : <Spinner color="darak" /> }
                </div>
            }
        </div>
    )
}

export default connect(mapStateToProps, null)(ListContact)
