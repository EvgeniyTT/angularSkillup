import ng from 'angular';
import NgAddImgDrctv from './directive';

export default ng.module('addImgForm', ['imgCart'])
  .directive('ngAddImgForm', ['imgService', NgAddImgDrctv]).name;
