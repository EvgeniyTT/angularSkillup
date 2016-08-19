import ng from 'angular';
import NgAddImgDrctv from './img-add.directive';

export default ng.module('addImgForm', ['imgCard'])
  .directive('ngAddImgForm', NgAddImgDrctv)
  .name;
