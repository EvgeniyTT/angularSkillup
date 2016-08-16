import ng from 'angular';
import ImgDetailDrctv from './directive'

export default ng.module('imgDetails', [])
  .directive('ngImgDetails', ImgDetailDrctv)
  .name;
