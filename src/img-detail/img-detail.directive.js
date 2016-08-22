import template from './index.html';
import controller from './img-detail.controller';

export default () => ({
  restrict: 'E',
  template,
  controller,
  controllerAs: 'imgDetailController'
});
