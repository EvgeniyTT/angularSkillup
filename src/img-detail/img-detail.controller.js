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
      console.log(this.img);
    });
  }

}
