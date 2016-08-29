export default class NgImageCardController {
  constructor(imgService) {
    'ngInject';
    this.imgService = imgService;
    this.deleteConfirm = false;
  }

  $onInit() {
    this.imgService.list().then((db) => { this.imgs = db.data; });
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

}
