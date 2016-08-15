import DirCtrl from './controller';

export default imgService => {
  return {
    restrict: 'A',
    templateUrl: '/src/imgCart/imgCart.html',
    controller: DirCtrl,
    controllerAs: 'imgCartCtrl'
  };
};

// export default class imgController {
//   constructor(imgService) {
//     this.restrict = 'A';
//     this.templateUrl = '/src/imgCart/imgCart.html';
//     this.controllerAs = 'imgCartCtrl';
//     this.controller = $scope => new DirCtrl(imgService, $scope);
//   }
// }
