import ng from 'angular';
import NgAddImgDrctv from './addImgForm.directive';

export default ng.module('addImgForm', ['imgCart'])
  .directive('ngAddImgForm', NgAddImgDrctv)
  .name;
