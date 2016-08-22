import ng from 'angular';
import NgImgCardDirective from './img-card.directive';
import NgImgCardService from './img-card.service';

export default ng.module('imgCard', [])
  .directive('ngImgGallery', NgImgCardDirective)
  .service('imgService', NgImgCardService)
  .name;
