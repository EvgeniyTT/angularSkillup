import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import ng from 'angular';
import 'angular-route';
import './assets/styles/style.css';
import ngImgCart from './img-card';
import ngNav from './navbar';
import ngAddImgForm from './img-add';
import ngImgDetails from './img-detail';
import router from './config-router.js';

ng.module('app', [ngNav, ngImgCart, ngAddImgForm, ngImgDetails, 'ngRoute'])
  .config(['$routeProvider', router]);
