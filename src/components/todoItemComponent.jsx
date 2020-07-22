import React, { Component } from 'react';
import { Modal, Button, Form, ButtonGroup } from 'react-bootstrap';


export function Item({handleEditItem, handleChange, todo, handleDeleteItem, handleCompleteItem}) {
    
    const [show, setShow] = React.useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <li className={`form-check todoitem ${todo.is_completed ? "done" : "undone"}`}>
          <label id="check" className="form-check-label" >
            <input  type="checkbox" className="form-check-input" onClick={handleCompleteItem} onChange={handleChange} /> 
            {todo.title}
          </label>
          <ButtonGroup className="btn-grp">
            <Button className="btn-info btn-sm" type="button"   size="lg" onClick={handleShow}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Button>
            <Button onClick={handleDeleteItem} type="button" className="btn-danger btn-sm " ><i className="fa fa-trash-o" aria-hidden="true"></i></Button>         
          </ButtonGroup>        
  
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
              <Form.Group controlId="title">
                  <Form.Label>Text:</Form.Label>
                  <Form.Control type="text" placeholder={todo.title} onChange={handleChange} defaultValue={todo.title}/>
                  
              </Form.Group>
            </Form>
          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleClose, handleEditItem}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </li>
      </>
    );
  }
  