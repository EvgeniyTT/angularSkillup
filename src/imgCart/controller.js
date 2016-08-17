export default class DirCtrl {
  constructor(imgService, $scope, $location) {
    this.$location = $location;
    this.imgService = imgService;
    this.imgService.imgs = this.imgService.list();
    this.imgService.imgToShow = this.imgService.list()[0];
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
    this.imgService.imgToShow = card.img;
    this.$location.path('/details');
    // document.querySelector('.nav a[href="#/details"]').parentNode.setAttribute('class', 'active');
  }
}
