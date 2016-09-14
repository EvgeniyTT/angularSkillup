export default class NgImageCardController {
  constructor(imgService) {
    'ngInject';
    this.imgService = imgService;
    this.deleteConfirm = false;
    this.amountToShow = 10;
    this.showRequest = 2;
  }

  $onInit() {
    this.imgService.list().then((db) => {
      this.imgs = db.data;
      this.imgsToShow = this.imgs.slice(0, this.amountToShow);
    });
  }

  deleteImg() {
    this.imgService.remove(this.currentImg.img._id)
                    .then(() => { return this.imgService.list() })
                    .then((db) => { this.imgs = db.data; });
    this.hideConfirmMessage();
  }

  showConfirmMessage(img) {
    this.currentImg = img;
    this.deleteConfirm = true;
  }

  hideConfirmMessage() {
    this.deleteConfirm = false;
  }

  showMore() {
    this.imgsToShow = this.imgs.slice(0, this.amountToShow * this.showRequest);
    this.showRequest++;
  }

}
