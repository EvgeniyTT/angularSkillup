import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'ng-img-crop-full-extended/compile/unminified/ng-img-crop.css';
import 'dropzone/dist/dropzone.css';
import ng from 'angular';
import 'angular-route';
import 'angular-messages';
import 'ng-img-crop-full-extended/compile/unminified/ng-img-crop';
import './assets/styles/style.css';
import imgCart from './img-card';
import imgAdd from './img-add';
import imgDetail from './img-detail';
import navbar from './navbar';
import gitinfo from './gitinfo';
import ngRouter from './main.config.js';
import dropzoneDirective from './dropzone/directive';


ng.module('app', [gitinfo, navbar, imgCart, imgAdd, imgDetail, 'ngRoute', 'ngMessages'])
  .directive('dropzone', dropzoneDirective)
  .config(ngRouter);
