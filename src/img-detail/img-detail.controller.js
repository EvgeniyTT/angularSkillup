export default class NgImageDetailController {
  constructor($routeParams, $location, imageService) {
    'ngInject';
    this.$routeParams = $routeParams;
    this.$location = $location;
    this.imageService = imageService;
    this.img = {};
  }

  $onInit() {
    this.imageService.get(this.$routeParams._id).then((db) => { this.img = db.data; });
    this.setPagination();
  }

  setPagination() {
    this.imageService.list().then((db) => {
      const images = db.data;
      const currentImageIndex = images.findIndex(img => { return img._id == this.$routeParams._id; });
      this.firstImg = currentImageIndex === 0;
      this.lastImg = currentImageIndex === images.length - 1;
      this.prevImg = images[currentImageIndex - 1];
      this.nextImg = images[currentImageIndex + 1];
    });
  }

}
