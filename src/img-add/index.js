import ng from 'angular';
import NgImgAddDirective from './img-add.directive';
import NgImgAddService from './img-add.service';

export default ng.module('addImgForm', ['imgCard'])
  .directive('ngImgAddForm', NgImgAddDirective)
  .service('imgAddService', NgImgAddService)
  .name;
