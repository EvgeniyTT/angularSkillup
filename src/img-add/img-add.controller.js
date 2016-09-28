import Dropzone from 'dropzone';


Dropzone.autoDiscover = false;

export default class NgImageAddController {
  constructor(imageService, $location, $http, $scope) {
    'ngInject';
    this.imageService = imageService;
    this.$location = $location;
    this.$http = $http;
    this.$scope = $scope;
    this.myImage = 'https://avatars.githubusercontent.com/u/4883612?v=3';
    this.myCroppedImage = ''; // in this variable you will have dataUrl of cropped area.
  }

  $onInit() {
    window.onload = () => {
      this.myDropzone = new Dropzone("#my-awesome-dropzone", {
        url: "http://10.10.54.24:3001/images",
        autoProcessQueue: false
      });
      this.myDropzone.on('complete', (file) => {
        console.log('COMPLETED');
      });
      this.myDropzone.on('thumbnail', (file, dataUrl) => {
        this.myImage = file;
        this.$scope.$digest();
      });
      this.myDropzone.on('error', (file, err) => { console.log('error.'); console.log(err); });
    }
  }

  addImg() {
    const image = { name: this.name, description: this.description, data: this.myCroppedImage };
    const currentDate = new Date();
    image.dateAdded = [currentDate.getMonth() + 1, currentDate.getDate(), currentDate.getFullYear()].join('/');
    this.imageService.save(image);
    // .then(() => { this.refreshListOnSave(); }); // using 'scope'
    // this.imageService.save(image).then(() => { this.imgCardController.$onInit(); }); // using 'require'
    this.name = '';
    this.description = '';
  }
}
