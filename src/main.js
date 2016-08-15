// import 'bootstrap/dist/css/bootstrap.css';
import ng from 'angular';
import ngImgCart from './imgCart';
import ngNav from './navbar';
import ngAddImgForm from './addImgForm';

ng.module('app', [ngNav, ngImgCart, 'addImgForm']);
