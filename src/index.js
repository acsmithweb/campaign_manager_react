import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import StatBlockComponent from './stat_block_component'
import * as serviceWorker from './serviceWorker';
import { render } from "react-dom";
import { Navbar, Nav, NavItem, NavDropdown, Glyphicon } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<><App /></>, document.getElementById('header'));
ReactDOM.render(<><StatBlockComponent /></>, document.getElementById('stat_blocks'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
