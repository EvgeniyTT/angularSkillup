import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'ng-img-crop-full-extended/compile/unminified/ng-img-crop.css';
import 'dropzone/dist/dropzone.css';
import ng from 'angular';
import 'angular-route';
import 'angular-messages';
import 'ng-img-crop-full-extended/compile/unminified/ng-img-crop';
import './assets/styles/style.css';
import ngImgCart from './img-card';
import ngImgAdd from './img-add';
import ngImgDetail from './img-detail';
import ngNav from './navbar';
import ngGit from './gitinfo';
import ngRouter from './main.config.js';

ng.module('app', [ngGit, ngNav, ngImgCart, ngImgAdd, ngImgDetail, 'ngRoute', 'ngMessages'])
  .config(ngRouter);
