import React, {Component} from "react";
import Roller from '../roller/roller'
import './app.css'


export default class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Roller/> 
            </div>
        );
    }
}