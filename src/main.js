import 'bootstrap/dist/css/bootstrap.css';
import ng from 'angular';
import 'angular-route';

import './assets/styles/style.css';
import ngImgCart from './imgCart';
import ngNav from './navbar';
import ngAddImgForm from './addImgForm';
import ngImgDetails from './imgDetails';

ng.module('app', [ngNav, ngImgCart, ngAddImgForm, ngImgDetails, 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/allImages', {
      template: '<h1>All Images</h1></br> <ng-img-gallery></ng-img-gallery>'
    })
    .when('/details', {
      template: '<ng-img-details ></ng-img-details>'
    })
    .when('/aboutUs', {
      template: '<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>'
    })
    .otherwise({
      redirectTo: '/allImages'
    });
  }]);
