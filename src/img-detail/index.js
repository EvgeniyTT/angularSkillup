import ng from 'angular';
import NgImgDetailDirective from './img-detail.directive';

export default ng.module('imgDetail', ['imgCard'])
  .directive('ngImgDetails', NgImgDetailDirective)
  .name;
