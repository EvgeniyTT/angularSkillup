import controller from './navbar.controller';
import template from './index.html';

export default () => ({
  restrict: 'E',
  template,
  controller,
  controllerAs: 'navCtrl'
});
