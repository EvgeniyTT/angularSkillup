import ng from 'angular';
import ImgSrvc from './img-card.service';
import NgImgCartDrctv from './img-card.directive';

export default ng.module('imgCard', [])
  .service('imgService', ImgSrvc)
  .directive('ngImgGallery', NgImgCartDrctv)
  .name;
