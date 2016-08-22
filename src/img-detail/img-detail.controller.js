export default class imgDetailCtrl {

  constructor(imgDetailService) {
    'ngInject';
    this.imgDetailService = imgDetailService;
    this.img = this.imgDetailService.img;
    this.imgDetailService.showImage();
    [this.firstImg, this.lastImg] = this.imgDetailService.setIfFirstOrLastImg();
  }

  nextImg() {
    this.imgDetailService.nextImg();
  }

  prevImg() {
    this.imgDetailService.prevImg();
  }
}
