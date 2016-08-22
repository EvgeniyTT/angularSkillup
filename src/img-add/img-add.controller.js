export default class AddImgCtrl {
  constructor(imgAddService) {
    'ngInject';
    this.imgAddService = imgAddService;
  }

  addImg() {
    this.imgAddService.addImage(this.src, this.description);
    this.src = '';
    this.description = '';
  }
}
