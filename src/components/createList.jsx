import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export function List({handleCreate, handleChange}) {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>        
        <div id="bt-c">
             <Button   variant="light" size="lg" onClick={handleShow}><i className="fa fa-plus-square " aria-hidden="true" ></i></Button>
        </div>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>New List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="title">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" placeholder="Enter list title" onChange={handleChange}/>
                
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="List description" onChange={handleChange} />                
            </Form.Group>
          </Form>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose, handleCreate}>
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
