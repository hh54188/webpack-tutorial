require('styles/style.css');

const React = require('react');
const ReactDOM = require('react-dom');
import Home from 'scripts/react_components/home.jsx';

ReactDOM.render(
    <Home />,
    document.querySelector('.container')
)