import controller from './img-add.controller';
import template from './index.html';

export default () => ({
  restrict: 'E',
  template,
  controller,
  controllerAs: 'addImgCtrl'
});
