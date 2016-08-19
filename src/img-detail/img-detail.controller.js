export default class imgDetailCtrl {

  constructor(imgService, $routeParams, $location) {
    'ngInject';
    this.$routeParams = $routeParams;
    this.$location = $location;
    this.imgService = imgService;
    this.imgs = this.imgService.imgs;
    this.imgService.refresh();
    this.imgService.list().success(imgs => {
      if (!$routeParams.id) {
        $location.url(`/details/${imgs[0].id}`);
        return; // reload page with first image's id in URL
      }
      this.img = imgs.filter(img => { return img.id == $routeParams.id })[0];
      this.setFirstAndLast();
    });
  }

  changeImgUrl() {
    this.$location.url(`/details/${this.img.id}`);
  }

  setFirstAndLast() {
    this.firstImg = this.isFirstImg();
    this.lastImg = this.isLastImg();
  }

  getCurImgIndex() {
    const imgs = this.imgs;
    const currentImgIndex = imgs.findIndex(img => { return img.id == this.img.id } );
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
      this.img = imgs[currentImgIndex + 1];
      this.setFirstAndLast();
      this.changeImgUrl();
    }
  }

  prevImg() {
    const [imgs, currentImgIndex] = this.getCurImgIndex();
    if (!this.isFirstImg()) {
      this.img = imgs[currentImgIndex - 1];
      this.setFirstAndLast();
      this.changeImgUrl();
    }
  }
}
