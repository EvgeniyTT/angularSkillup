import NgAddImgCtrl from './controller';

export default (imgService, NgAddImgCtrl) => {
  return {
    restrict: 'E',
    templateUrl: '/src/addImgForm/addImgForm.html',
    controller: NgAddImgCtrl,
    controllerAs: 'addImgCtrl'
  };
}
