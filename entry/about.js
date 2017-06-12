require('styles/style.css');

const React = require('react');
const ReactDOM = require('react-dom');
import About from 'scripts/react_components/about.jsx';

ReactDOM.render(
    <About />,
    document.querySelector('.container')
)