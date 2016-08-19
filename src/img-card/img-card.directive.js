import template from './index.html';
import controller from './img-card.controller';

export default () => ({
  restrict: 'E',
  template,
  controller,
  controllerAs: 'imgCardCtrl'
});
