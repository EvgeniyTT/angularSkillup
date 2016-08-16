import 'bootstrap/dist/css/bootstrap.css';
import ng from 'angular';

import './assets/styles/style.css';
import ngImgCart from './imgCart';
import ngNav from './navbar';
import ngAddImgForm from './addImgForm';

ng.module('app', [ngNav, ngImgCart, ngAddImgForm]);
