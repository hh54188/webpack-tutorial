import {str} from 'scripts/module_b_es6';
require('styles/style.css');

const React = require('react');
const ReactDOM = require('react-dom');
import Head from 'scripts/react_components/head.jsx';

ReactDOM.render(
    <Head />,
    document.querySelector('.container')
)