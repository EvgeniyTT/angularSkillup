import ng from 'angular';
import NgImgAddDirective from './img-add.directive';

export default ng.module('addImgForm', ['imgCard'])
  .directive('ngImgAddForm', NgImgAddDirective)
  .name;
