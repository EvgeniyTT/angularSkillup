import template from './index.html';
import controller from './img-add.controller';

export default () => ({
  restrict: 'E',
  template,
  controller,
  controllerAs: 'addImgController',
  scope: {
    refreshListOnSave: '&',
  },
  bindToController: true
});
