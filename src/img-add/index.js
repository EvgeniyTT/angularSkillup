import ng from 'angular';
import NgAddImgDrctv from './img-add.directive';
import NgImgAddService from './img-add.service';

export default ng.module('addImgForm', ['imgCard'])
  .directive('ngAddImgForm', NgAddImgDrctv)
  .service('imgAddService', NgImgAddService)
  .name;
