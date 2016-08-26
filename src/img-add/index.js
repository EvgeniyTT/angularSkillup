import ng from 'angular';
import NgImgAddDirective from './img-add.directive';

export default ng.module('addImgForm', [])
  .directive('ngImgAddForm', NgImgAddDirective)
  .name;
