export default class imgDetailCtrl {

  constructor($scope, imgService) {
    this.$scope = $scope;
    this.imgService = imgService;
    this.setFirstImg();
    this.firstImg = true;
    this.lastImg = false;
  }

  setFirstImg() {
    this.$scope.img = this.imgService.list()[0];
  }

  nextImg() {
    const imgs = this.imgService.list();
    const currentImgIndex = imgs.findIndex(img => img.src === this.$scope.img.src);
    if (currentImgIndex !== imgs.length - 1) {
      this.$scope.img = imgs[currentImgIndex + 1];
      if (currentImgIndex === 0) {
        this.firstImg = false;
      }
      if (currentImgIndex === imgs.length - 2) {
        this.lastImg = true;
      }
    }
  }

  prevImg() {
    const imgs = this.imgService.list();
    const currentImgIndex = imgs.findIndex(img => img.src === this.$scope.img.src);
    if (currentImgIndex !== 0) {
      this.$scope.img = imgs[currentImgIndex - 1];
      if (currentImgIndex === 1) {
        this.firstImg = true;
      }
      if (currentImgIndex === imgs.length - 1) {
        this.lastImg = false;
      }
    }
  }
}
