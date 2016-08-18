import template from './index.html';
import controller from './imgCart.controller';

export default (imgService) => {
  'ngInject';
  return {
    restrict: 'E',
    template,
    controller,
    controllerAs: 'imgCartCtrl'
  };
};
