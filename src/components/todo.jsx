import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodoAction ,fetchTodosAction, DeleteTodoAction, UpdateTodoAction } from '../actions/todoActions';
import { createTodoItemAction, fetchSingleTodoItemsAction, fetchTodoItemsAction, UpdateTodoItemAction,  DeleteTodoItemAction } from '../actions/todoItemsActions';
import { Button, Card, Form, CardColumns, InputGroup, FormGroup} from 'react-bootstrap';
import { TopNav } from './navigation';
import './hrt.css';
import './todo.scss';
import '../index.css';

import { List } from './createList';
import { EditList } from './editList';
import { Item } from './todoItemComponent';

export class ToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
            complete : false,
            check : false,
            item: {},
            title: "",
            description: "",
            todos : [],
            items : []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCreateList = this.handleCreateList.bind(this);
        this.handleDeleteList = this.handleDeleteList.bind(this);
        this.handleEditList = this.handleEditList.bind(this);

        this.handleCreateItem = this.handleCreateItem.bind(this);
    }

    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }

    componentDidMount() {
        this.props.fetchTodosAction();
      }

    handleCreateList(event){
      event.preventDefault();
      const { title, description } = this.state;
      this.props.createTodoAction({title: title, description: description}).then(() => {
        window.location.reload(true);
      });
    }

    handleEditList(event, todo_id){
      event.preventDefault();
      const { title, description } = this.state;
      const data = {title: title, description: description};
      this.props.UpdateTodoAction({id:todo_id, payload:data}).then(() => {
        window.location.reload(true);
      });
    }

    handleDeleteList(event, key){
      event.preventDefault();
      this.props.DeleteTodoAction(key).then(() => {
        window.location.reload(false);
      });
    }

    handleCreateItem(event, id){
      event.preventDefault();
      const { title, description, complete } = this.state;
      const data = {id : id, data: {title: title, description: description, is_complete: complete}}
      this.props.createTodoItemAction(data).then(() => {
        window.location.reload(true);
      });
    }

    handleEditItem(event, todo_id, item_id){
      event.preventDefault();
      const { title, description} = this.state;
      const data = {
        todo_id : todo_id,
        item_id : item_id,
        payload : {title: title, description: description}
      }
      this.props.UpdateTodoItemAction(data).then(() => {
        window.location.reload(true);
      });
    }

    handleCompleteItem(event, todo_id, item){
      event.preventDefault();
      var { check } = this.state;
      if(item.is_completed===true){
        check=false
      }else{
        check=true
      }
      
      const data = {
        todo_id : todo_id,
        item_id : item.id,
        payload : {title: item.title, is_completed: check}
      }
      this.props.UpdateTodoItemAction(data).then(() => {
        window.location.reload(true);
      });
    }

    handleDeleteItem(event,todo_id, item_id){
      event.preventDefault();
      const data = {
        todo_id : todo_id,
        item_id : item_id
      }
      this.props.DeleteTodoItemAction(data).then(() => {
        window.location.reload(false);
      });
    }

    render(){
        const todos = this.props.todos.map(todo =>
            <Card key={todo.id} className="text-center mx-auto" border="info">
                <Card.Header>
                  <div>
                  <EditList handleEditList={(event) => this.handleEditList(event, todo.id)} todo={todo} handleChange={this.handleChange} />
                  <Button variant="light"  type="button" className=" btn-sm " onClick={(event) => this.handleDeleteList(event, todo.id)} ><i className="fa fa-trash-o" aria-hidden="true"></i></Button>
                  </div>
                </Card.Header>
                <Card.Body id="crd-col-bdy">
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>
                    {todo.description}
                    </Card.Text>
                    <div>
                    <ul className="todolist">
                      {todo.todo_items.map(item => (
                        <Item handleChange={this.handleChange} todo={item} handleEditItem={(event) => this.handleEditItem(event, todo.id, item.id)} handleCompleteItem={(event) => this.handleCompleteItem(event, todo.id, item)} handleDeleteItem={(event) => this.handleDeleteItem(event,todo.id,item.id)}/>
                      ))}
                    </ul>
                      
                    </div>
                    <Form>
                      <FormGroup controlId="title">                        
                      <InputGroup className="mb-3">
                        <Form.Control  type="text"  placeholder="Add a todo item" onChange={this.handleChange} />
                        <Button variant="info" type="submit" onClick={(event) => this.handleCreateItem(event, todo.id)} >Add</Button>                  
                      </InputGroup>
                      </FormGroup>
                    </Form>
                </Card.Body>
                <Card.Footer className="text-muted">  </Card.Footer>
            </Card>
            );
        return(
            <div>
                <TopNav />
                <div id="todo-title"><h1>Your ToDos</h1></div>
                <div>
                  <List handleCreate={this.handleCreateList} handleChange={this.handleChange}/>
                </div>
                <br></br>
                <div id="crd-col">
                <CardColumns >
                    {todos}              
                </CardColumns>
                </div>
        </div>
        );
    }
}

function mapStateToProps(state){
    return{
        todos : state.todo.todos.reverse(),
        todo : state.todo

    };
}

export default connect(
    mapStateToProps,
    { fetchTodosAction, 
      createTodoAction, 
      DeleteTodoAction, 
      UpdateTodoAction, 

      createTodoItemAction,
      fetchSingleTodoItemsAction,
      fetchTodoItemsAction,
      UpdateTodoItemAction,
      DeleteTodoItemAction }
)(ToDo);