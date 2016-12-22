import './scripts/globals';
import app from './scripts/app';
import ReactDOM from 'react-dom';
// require('../node_modules/materialize-css/dist/css/materialize.css');
// require('../node_modules/materialize-css/dist/js/materialize.min.js');

//Gathering .scss files from scripts and styles folders
const baseStyles = require.context('./styles', true, /\.scss$/);
baseStyles.keys().forEach(baseStyles);

const componentStyles = require.context('./scripts', true, /\.scss$/);
componentStyles.keys().forEach(componentStyles);

//Application is rendered into DOM below
ReactDOM.render(app, document.getElementById('app'));
