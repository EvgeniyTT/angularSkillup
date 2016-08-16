import detailsCtrl from './controller';

export default imgService => ({
  restrict: 'E',
  templateUrl: '/src/imgDetails/imgDetails.html',
  controller: ['$scope', 'imgService', detailsCtrl],
  controllerAs: 'imgDetailsCtrl'
})
