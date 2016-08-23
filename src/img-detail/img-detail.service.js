export default class imgDetailService {

  constructor(imgService, $routeParams, $location) {
    'ngInject';
    this.$routeParams = $routeParams;
    this.$location = $location;
    this.imgService = imgService;
    this.imgService.refresh();
    this.imgs = this.imgService.imgs;
    this.img = {};
  }

  showImage() {
    this.imgService.list().success(imgs => {
      if (!this.$routeParams.id) {
        this.$location.url(`/details/${imgs[0].id}`);
        return; // reload page with first image's id in URL
      }
      const image = imgs.filter(img => { return img.id == this.$routeParams.id; })[0];
      for (let attrname in image) { this.img[attrname] = image[attrname]; }
    });
  }

  changeImgUrl() {
    this.$location.url(`/details/${this.img.id}`);
  }

  setIfFirstOrLastImg() {
    return [this.isFirstImg(), this.isLastImg()];
  }

  getCurImgIndex() {
    const imgs = this.imgs;
    const currentImgIndex = imgs.findIndex(img => { return img.id == this.$routeParams.id; } );
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

  nextImage() {
    const [imgs, currentImgIndex] = this.getCurImgIndex();
    if (!this.isLastImg()) {
      this.img = imgs[currentImgIndex + 1];
      this.changeImgUrl();
      this.imgService.refresh();
    }
  }

  prevImage() {
    const [imgs, currentImgIndex] = this.getCurImgIndex();
    if (!this.isFirstImg()) {
      this.img = imgs[currentImgIndex - 1];
      this.changeImgUrl();
      this.imgService.refresh();
    }
  }
}
