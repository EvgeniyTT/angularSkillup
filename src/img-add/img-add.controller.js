export default class NgImageAddController {
  constructor(imgService, $location) {
    'ngInject';
    this.imgService = imgService;
    this.$location = $location;
  }

  addImg() {
    const image = { src: this.src, description: this.description };
    const currentDate = new Date();
    image.dateAdded = [currentDate.getMonth() + 1, currentDate.getDate(), currentDate.getFullYear()].join('/');
    this.imgService.save(image).then(() => { this.refreshListOnSave(); }); // using 'scope'
    // this.imgService.save(image).then(() => { this.imgCardController.$onInit(); }); // using 'require'
    this.src = '';
    this.description = '';
  }

}
