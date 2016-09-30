export default class NgImageDetailController {
  constructor($routeParams, $location, imageService) {
    'ngInject';
    this.$routeParams = $routeParams;
    this.$location = $location;
    this.imageService = imageService;
    this.img = {};
  }

  $onInit() {
    this.imageService.get(this.$routeParams._id).then((db) => {
      this.img = db.data;
      this.imgPath = `${API_HOST}/origin/${this.img._id.slice(0,8)}/${this.img._id.slice(8,16)}/${this.img._id.slice(16,24)}.jpg`;
    });
  }
}
