import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import ng from 'angular';
import 'angular-route';
import './assets/styles/style.css';
import ngImgCart from './imgCart';
import ngNav from './navbar';
import ngAddImgForm from './addImgForm';
import ngImgDetails from './imgDetails';
import router from './router';

ng.module('app', [ngNav, ngImgCart, ngAddImgForm, ngImgDetails, 'ngRoute'])
  .config(['$routeProvider', router]);
