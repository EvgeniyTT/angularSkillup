import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import ng from 'angular';
import 'angular-route';
import './assets/styles/style.css';
import ngImgCart from './img-card';
import ngImgAdd from './img-add';
import ngImgDetail from './img-detail';
import ngNav from './navbar';
import ngRouter from './config-router.js';

ng.module('app', [ngNav, ngImgCart, ngImgAdd, ngImgDetail, 'ngRoute'])
  .config(['$routeProvider', ngRouter]);
