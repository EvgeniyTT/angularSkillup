export default class NgImageDetailController {
  constructor($routeParams, $location, imgService) {
    'ngInject';
    this.$routeParams = $routeParams;
    this.$location = $location;
    this.imgService = imgService;
    this.img = {};
  }

  $onInit() {
    this.imgService.get(this.$routeParams._id).then((db) => { this.img = db.data; });
    this.setPagination();
  }

  setPagination() {
    this.imgService.list().then((db) => {
      const images = db.data;
      const currentImageIndex = images.findIndex(img => { return img._id == this.$routeParams._id; });
      this.firstImg = currentImageIndex === 0;
      this.lastImg = currentImageIndex === images.length - 1;
      this.prevImg = images[currentImageIndex - 1];
      this.nextImg = images[currentImageIndex + 1];
    });
  }

}
