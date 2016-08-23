export default class NgImageAddController {
  constructor(imgService, $location, $scope) {
    'ngInject';
    this.imgService = imgService;
    this.$location = $location;
    this.$scope = $scope;
  }

  addImg() {
    const image = { src: this.src, description: this.description };
    const currentDate = new Date();
    image.dateAdded = [currentDate.getMonth() + 1, currentDate.getDate(), currentDate.getFullYear()].join('/');
    this.imgService.save(image).then(() => { this.$scope.$emit('imageAdded'); });
    this.src = '';
    this.description = '';
  }
}
