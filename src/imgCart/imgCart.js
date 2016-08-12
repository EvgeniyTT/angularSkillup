(function () {
  const imgCart = angular.module('imgCart', []);

  imgCart.service('imgService', ['$http', function ($http) {
    this.imgs = [];
    //  binding 'this' to use in promises
    function bindData(data) {
      this.imgs = data;
    }
    const assignDataToImgs = bindData.bind(this);
    //  get imgs from file
    $http.get('/src/imgs.json').success(function (data) { assignDataToImgs(data); });
    //  getters, setters
    this.addToImgsList = function (img) {
      this.imgs.push(img);
    };
    this.getImgsList = function () {
      return this.imgs;
    };
    this.removeImgFromList = function (cart) {
      this.imgs = this.imgs.filter(function(obj) {
        return obj.src !== cart.img.src;
      });
    };
  }]);

  imgCart.directive('ngImgCart', ['$http', 'imgService', function ($http, imgService) {
    return {
      restrict: 'A',
      templateUrl: '../imgCart/imgCart.html',
      controller: function ($scope) {
        this.deleteImg = function (cart) {
          imgService.removeImgFromList(cart);
        };
        //  watch 'imgService.imgs' on change to update lists if new image was added
        $scope.$watch(function watchChange(scope) { return imgService.imgs; },
              function handleChange() {
                $scope.imgs = imgService.imgs;
              });
        // $scope.$watch('imgService.imgs', function handleChange() {
        //   console.log('in watch'); $scope.imgs = imgService.imgs;
        // });
      },
      controllerAs: 'imgCartCtrl'
    };
  }]);
})();
