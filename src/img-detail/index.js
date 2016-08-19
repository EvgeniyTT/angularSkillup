import ng from 'angular';
import ImgDetailDrctv from './img-detail.directive';

export default ng.module('imgDetail', ['imgCard'])
  .directive('ngImgDetails', ['imgService', ImgDetailDrctv])
  .name;
