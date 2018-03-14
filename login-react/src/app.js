import FormContainer from './js/components/container/FormContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import style from './css/style.scss';

const wrapper = document.getElementById('create-article-form');
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
