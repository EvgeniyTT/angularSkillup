export default class DirCtrl {
  constructor(imgService, $scope, $location) {
    'ngInject';
    this.$location = $location;
    this.imgService = imgService;
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

  showDetails(card) {
    this.$location.url('/details/' + card.img.id);
  }
}
