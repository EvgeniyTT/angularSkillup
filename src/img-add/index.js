import ng from 'angular';
// import 'ngdropzone';
import NgImgAddDirective from './img-add.directive';

export default ng.module('addImgForm', [])
  .directive('ngImgAddForm', NgImgAddDirective)
  .name;
