module.exports = (function () {
  let addImgForm = angular.module('addImgForm', ['imgCart']);

  addImgForm.directive('ngAddImgForm', function () {
    return {
      restrict: 'E',
      templateUrl: '/src/addImgForm/addImgForm.html',
      controller: function ($scope, imgService) {
        this.addImg = function () {
          let img = {};
          img.src = $scope.src;
          img.label = $scope.description;
          imgService.add(img);
        };
      },
      controllerAs: 'addImgCtrl'
    };
  });
})();
