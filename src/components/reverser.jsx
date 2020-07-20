import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reverseVowels } from '../actions/reverserAction';
import { TopNav } from './navigation';
import { Form, Button, Card } from 'react-bootstrap';
import './hrt.css';

export class Reverse extends Component{
    constructor(props){
        super(props);
        this.state = {
            reverse : ""
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
      }

    handleSubmit(event) {
        event.preventDefault();
        const { reverse } = this.state;
        this.props.reverseVowels({ message: reverse });
        this.setState({ reverse: "" });
    }

    render(){
        const { reverse } = this.state;
        return(
            <div>
            <TopNav />
            <div>
            <Card className="text-center mx-auto crd" justify="true" border="info">
                <Card.Header></Card.Header>
                <Card.Body id="crd_bdy">
                    <Form className="rev-form" justify="true" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="reverse">
                            <Form.Label>Sentence:</Form.Label>
                            <Form.Control as="textarea"  placeholder="Enter a sentence to reverse its vowels" onChange={this.handleChange} />
                            <Form.Text className="text-muted" > 
                            </Form.Text>
                        </Form.Group>                        
                        <Button variant="info" type="submit">
                            Reverse Vowels
                        </Button>
                    </Form>
                    <h2>{this.props.reversed}</h2>
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
        reversed : state.reverse.response
    };
}

export default connect(
    mapStateToProps,
    { reverseVowels }
)(Reverse);