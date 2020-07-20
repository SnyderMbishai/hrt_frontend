import React, { Component } from 'react';
import { connect } from 'react-redux';
import { helloAction } from '../actions/helloActions';
import { Button, Card, Form } from 'react-bootstrap';
import { TopNav } from './navigation';
import './hrt.css';

export class Hello extends Component{
    constructor(props){
        super(props);
        this.state = {
            word: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.helloAction();
        this.setState({ word: "" });
      }

    render(){
        const { word } = this.props;
        return(
            <div>
                <TopNav />
                <div>
                <Card className="text-center mx-auto crd" justify="true" border="info">
                <Card.Header></Card.Header>
                <Card.Body id="crd_bdy">
                    <Card.Title>HELLO</Card.Title>
                    <Card.Text>
                    Say hello to the ...
                    </Card.Text>
                    <Form onSubmit={this.handleSubmit}>
                    <Button type="submit" variant="info">Find out</Button>
                    </Form>
                    <h1>{word}</h1>
                </Card.Body>
                <Card.Footer className="text-muted">  </Card.Footer>
                </Card>
                </div>
        </div>
        );
    }
}

function mapStateToProps(state){
    return{
        word : state.hello.response
    };
}

export default connect(
    mapStateToProps,
    { helloAction }
)(Hello);