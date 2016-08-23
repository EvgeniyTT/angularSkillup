export default class NgImageCardController {
  constructor(imgService, $scope) {
    'ngInject';
    this.imgService = imgService;
    this.$scope = $scope;
    this.deleteConfirm = false;
    this.$scope.$on('imageAdded', () => { this.$onInit(); });
  }

  $onInit() {
    this.imgService.list().then((db) => { this.imgs = db.data; });
  }

  deleteImg() {
    this.imgService.remove(this.currentImg.img.id)
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
