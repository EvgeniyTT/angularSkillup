export default class NgImageAddController {
  constructor(imageService, $location) {
    'ngInject';
    this.imageService = imageService;
    this.$location = $location;
  }

  addImg() {
    const image = { src: this.src, description: this.description };
    const currentDate = new Date();
    image.dateAdded = [currentDate.getMonth() + 1, currentDate.getDate(), currentDate.getFullYear()].join('/');
    this.imageService.save(image).then(() => { this.refreshListOnSave(); }); // using 'scope'
    // this.imageService.save(image).then(() => { this.imgCardController.$onInit(); }); // using 'require'
    this.src = '';
    this.description = '';
  }
}
