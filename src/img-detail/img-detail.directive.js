import template from './index.html';
import detailsCtrl from './img-detail.controller';

export default () => ({
  restrict: 'E',
  template,
  controller: detailsCtrl,
  controllerAs: 'imgDetailsCtrl'
});
