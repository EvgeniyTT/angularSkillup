import ng from 'angular';
import ImgDetailDrctv from './img-detail.directive';
import NgImageDetailService from './img-detail.service';

export default ng.module('imgDetail', ['imgCard'])
  .directive('ngImgDetails', ['imgService', ImgDetailDrctv])
  .service('imgDetailService', NgImageDetailService)
  .name;
