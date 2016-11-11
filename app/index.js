/* global Firebase */

import './scripts/globals';
import app from './scripts/app';
import ReactDOM from 'react-dom';
import 'materialize-css';
// require('firebase/database');
// require('firebase/storage');

//Gathering .scss files from scripts and styles folders
const baseStyles = require.context('./styles', true, /\.scss$/);
baseStyles.keys().forEach(baseStyles);

const componentStyles = require.context('./scripts', true, /\.scss$/);
componentStyles.keys().forEach(componentStyles);

// const materialStyles = require.context('../node_modules', true, /\.scss$/);
// componentStyles.keys().forEach(materialStyles);

//Application is rendered into DOM below
ReactDOM.render(app, document.getElementById('app'));
