import ng from 'angular';
import ImgSrvc from './imgCard.service';
import NgImgCartDrctv from './imgCard.directive';

export default ng.module('imgCart', [])
  .service('imgService', ImgSrvc)
  .directive('ngImgGallery', NgImgCartDrctv)
  .name;
