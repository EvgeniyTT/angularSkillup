
import DirCtrl from './controller';

export default (imgService) => {
  return {
    restrict: 'E',
    templateUrl: '/src/imgCart/imgCart.html',
    controller: ['imgService', '$scope', '$location', DirCtrl],
    controllerAs: 'imgCartCtrl'
  };
};
