import detailsCtrl from './controller';

export default function() {
  return {
    restrict: 'E',
    templateUrl: '/src/imgDetails/imgDetails.html',
    controller: ['$scope', detailsCtrl],
    controllerAs: 'imgDetailsCtrl'
  };
}
