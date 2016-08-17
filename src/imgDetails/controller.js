export default class imgDetailCtrl {

  constructor($scope, imgService) {
    this.$scope = $scope;
    this.imgService = imgService;
    this.setFirstImg();
  }

  setFirstImg() {
    this.$scope.img = this.imgService.imgToShow;
    this.firstImg = this.isFirstImg();
    this.lastImg = this.isLastImg();
  }

  getCurImgIndex() {
    const imgs = this.imgService.list();
    const currentImgIndex = imgs.findIndex(img => img.src === this.$scope.img.src);
    return [imgs, currentImgIndex];
  }

  isFirstImg() {
    const [imgs, currentImgIndex] = this.getCurImgIndex();
    return currentImgIndex === 0;
  }

  isLastImg() {
    const [imgs, currentImgIndex] = this.getCurImgIndex();
    return currentImgIndex === imgs.length - 1;
  }

  nextImg() {
    const [imgs, currentImgIndex] = this.getCurImgIndex();
    if (!this.isLastImg()) {
      this.$scope.img = imgs[currentImgIndex + 1];
      this.firstImg = this.isFirstImg();
      this.lastImg = this.isLastImg();
    }
  }

  prevImg() {
    const [imgs, currentImgIndex] = this.getCurImgIndex();
    if (!this.isFirstImg()) {
      this.$scope.img = imgs[currentImgIndex - 1];
      this.firstImg = this.isFirstImg();
      this.lastImg = this.isLastImg();
    }
  }
}
