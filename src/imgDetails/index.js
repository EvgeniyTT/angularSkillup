import ng from 'angular';
import ImgDetailDrctv from './imgDetails.directive';

export default ng.module('imgDetails', ['imgCart'])
  .directive('ngImgDetails', ['imgService', ImgDetailDrctv])
  .name;
