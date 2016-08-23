import template from './index.html';
import controller from './img-add.controller';

export default () => ({
  restrict: 'E',
  template,
  controller,
  controllerAs: 'addImgController',
  // require: '^^imgCard',
  // link: function(scope, element, attrs, imgCardController) {
  //   scope.$on('save', function() {
  //     console.log(imgCardController);
  //     imgCardController.$onInit();
  //   })
  // }
});
