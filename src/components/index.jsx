import React, { Component } from 'react';
import './hrt.css';
import { TopNav } from './navigation';

export default class Welcome extends Component{
    render(){

    return(
        <>
        <TopNav />
        <h1 id="h">WELCOME!!!</h1>
        </>
    );
}
}
