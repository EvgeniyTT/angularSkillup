export default class NgImageDetailController {
  constructor(imgDetailService) {
    'ngInject';
    this.imgDetailService = imgDetailService;
    this.img = this.imgDetailService.img;
    this.imgDetailService.showImage();
    [this.firstImg, this.lastImg] = this.imgDetailService.setIfFirstOrLastImg();
  }

  nextImage() {
    this.imgDetailService.nextImage();
  }

  prevImage() {
    this.imgDetailService.prevImage();
  }
}
