export default class NgImageCardController {
  constructor(imgService, $location, $routeParams) {
    'ngInject';
    this.$location = $location;
    this.imgService = imgService;
    this.imgs = this.imgService.imgs;
    this.$routeParams = $routeParams;
    this.deleteConfirm = false;
    this.imgService.refresh();
  }

  deleteImg() {
    this.imgService.remove(this.currentImg.img.id);
    this.hideConfirmMessage();
  }

  showConfirmMessage(img) {
    this.currentImg = img;
    this.deleteConfirm = true;
  }

  hideConfirmMessage() {
    this.deleteConfirm = false;
  }

  showDetails(card) {
    this.$location.url('/details/' + card.img.id);
  }
}
