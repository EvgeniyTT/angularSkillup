import template from './index.html';
import detailsCtrl from './imgDetails.controller';

export default imgService => ({
  restrict: 'E',
  template,
  controller: detailsCtrl,
  controllerAs: 'imgDetailsCtrl'
});
