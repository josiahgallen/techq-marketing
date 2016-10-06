// inject global dependencies here so you don't have to do it in each file

import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase/app';

window.Firebase = Firebase;
window.React = React;
window.ReactDOM = ReactDOM;
