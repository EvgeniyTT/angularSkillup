import controller from './addImgForm.controller';
import template from './index.html';

export default imgService => {
  'ngInject';
  return {
    restrict: 'E',
    template,
    controller,
    controllerAs: 'addImgCtrl'
  };
};
