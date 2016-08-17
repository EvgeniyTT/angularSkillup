import NgAddImgCtrl from './controller';

export default imgService => {
  return {
    restrict: 'E',
    templateUrl: '/src/addImgForm/addImgForm.html',
    controller: ['imgService', '$scope', NgAddImgCtrl],
    controllerAs: 'addImgCtrl'
  };
}
