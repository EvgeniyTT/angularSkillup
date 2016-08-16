import ng from 'angular';
import ImgServiceClass from './service';
import NgImgCartClass from './directive';
import DirCtrl from './controller';

export default ng.module('imgCart', [])
  .service('imgService', ['$http', ImgServiceClass])
  // .service('dirCtrl', ['imgService', '$rootScope', DirCtrl])
  // .controller('dirCtrl', ['$scope', 'imgService', DirCtrl])
  .directive('ngImgCart', ['imgService', NgImgCartClass])
  .name;
