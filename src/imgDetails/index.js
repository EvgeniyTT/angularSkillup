import ng from 'angular';
import ImgDetailDrctv from './directive';

export default ng.module('imgDetails', ['imgCart'])
  .directive('ngImgDetails', ['imgService', ImgDetailDrctv])
  .name;
