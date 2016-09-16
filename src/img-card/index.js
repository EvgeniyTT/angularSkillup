import ng from 'angular';
import ImgCardDirective from './img-card.directive';
import ImgCardService from './img-card.service';

export default ng.module('imgCard', [])
  .directive('imageGallery', ImgCardDirective)
  .service('imageService', ImgCardService)
  .name;
