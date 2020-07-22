import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export function EditList({handleEditList, handleChange, todo}) {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>     
        
        <Button className="btn-sm " type="button"  variant="light" size="lg" onClick={handleShow}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
          
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edit List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="title">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" placeholder={todo.title} onChange={handleChange} defaultValue={todo.title}/>
                
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder={todo.description} onChange={handleChange} defaultValue={todo.description}/>                
            </Form.Group>
          </Form>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose, handleEditList}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  