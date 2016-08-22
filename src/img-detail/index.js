import ng from 'angular';
import NgImgDetailDirective from './img-detail.directive';
import NgImgDetailService from './img-detail.service';

export default ng.module('imgDetail', ['imgCard'])
  .directive('ngImgDetails', NgImgDetailDirective)
  .service('imgDetailService', NgImgDetailService)
  .name;
