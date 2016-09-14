export default class NgImageCardController {
  constructor(imgService) {
    'ngInject';
    this.imgService = imgService;
    this.deleteConfirm = false;
    this.imgsToShow = [];
    this.amountToRequest = 10;
    this.skip = 0;
  }

  $onInit() {
    this.showMore();
  }

  deleteImg(img) {
    this.imgService.remove(img.img._id)
                    .then((result) => { if (result.data.ok == 1) {
                        this.imgsToShow = this.imgsToShow.filter((el) => { return el._id != img.img._id; });
                    } });
  }

  showMore() {
    this.imgService.list(this.skip, this.amountToRequest).then((db) => {
      this.imgsToShow = this.imgsToShow.concat(db.data);
      this.skip = this.skip + this.amountToRequest;
    });
  }

}
