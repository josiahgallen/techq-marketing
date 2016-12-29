import './scripts/globals';
import app from './scripts/app';
import Footer from './scripts/components/footer';
import React from 'react';
import ReactDOM from 'react-dom';
// import { init as initDB } from './db';

// const config = {
// 	apiKey: 'AIzaSyBQIeXmFpDv6NoE2oQ7DVoY_w5nHtnTBt0',
// 	authDomain: 'techqmarketing-2e708.firebaseapp.com',
// 	databaseURL: 'https://techqmarketing-2e708.firebaseio.com',
// 	storageBucket: 'techqmarketing-2e708.appspot.com',
// 	messagingSenderId: '698872446992'
// };
// Firebase.initializeApp(config);
// initDB();

//Gathering .scss files from scripts and styles folders
const baseStyles = require.context('./styles', true, /\.scss$/);
baseStyles.keys().forEach(baseStyles);

const componentStyles = require.context('./scripts', true, /\.scss$/);
componentStyles.keys().forEach(componentStyles);

//Application is rendered into DOM below
ReactDOM.render(app, document.getElementById('app'));
ReactDOM.render(React.createElement(Footer), document.getElementById('footer'));
