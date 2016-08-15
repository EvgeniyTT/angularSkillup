import ng from 'angular';
import ImgServiceClass from './service';
import NgImgCartClass from './directive';

export default ng.module('imgCart', [])
  .service('imgService', ['$http', ImgServiceClass])
  .directive('ngImgCart', ['imgService', NgImgCartClass])
  .name;
