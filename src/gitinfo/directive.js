import template from './index.html';
import controller from './controller';

export default () => ({
  restrict: 'E',
  template,
  controller,
  controllerAs: 'gitController',
});
