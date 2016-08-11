(function() {
  const imgCart = angular.module('imgCart', []);

  imgCart.service('imgService', ['$http', function ($http) {

    let imgs=[];
    $http.get('/imgs.json').success(function(data) { imgs = data });

    this.addToImgsList = function (img) {

    };
    this.getImgsList = function () {
      return imgs;
    };
    this.removeImgFromList = function (cart) {
      imgs = imgs.filter(function(obj) {
        return obj.src !== cart.img.src;
      });
    };
  }]);

  imgCart.directive('ngImgCart', ['$http', 'imgService', function($http, imgService) {
    return {
      restrict: 'A',
      templateUrl: '../imgCart/imgCart.html',
      controller: function($scope) {
        this.reloadImgs = function() {
          $scope.imgs = imgService.getImgsList();
        };
        this.deleteImg = function(cart) {
          imgService.removeImgFromList(cart);
          this.reloadImgs();
        };
        this.reloadImgs();
      },
      controllerAs: 'imgCartCtrl'
    };
  }]);
})();
