export default class DirCtrl {
  constructor(imgService, $scope) {
    this.imgService = imgService;
    imgService.imgs = this.imgService.list();
    this.deleteConfirm = false;

    $scope.$watch(
      function watchChange(scope) { return imgService.imgs; },
      function handleChange() { $scope.imgs = imgService.imgs; }
    );
  }

  deleteImg() {
    this.imgService.remove(this.currentImg);
    this.hideConfirm();
  }

  showConfirm(img) {
    this.currentImg = img;
    this.deleteConfirm = true;
  }
  hideConfirm() {
    this.deleteConfirm = false;
  }
}
