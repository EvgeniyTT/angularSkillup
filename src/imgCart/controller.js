export default class DirCtrl {
  constructor(imgService, $scope) {
    this.imgService = imgService;
    this.imgService.list();

    $scope.$watch(
      function watchChange(scope) { return imgService.imgs; },
      function handleChange() { $scope.imgs = imgService.imgs; }
    );
  }

  deleteImg(cart) {
    this.imgService.remove(cart);
  }
}
