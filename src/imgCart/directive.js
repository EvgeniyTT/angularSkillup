
import DirCtrl from './controller';

export default (imgService) => {
  return {
    restrict: 'A',
    templateUrl: '/src/imgCart/imgCart.html',
    controller: ['imgService', '$scope', DirCtrl],
    controllerAs: 'imgCartCtrl'
  };
};
