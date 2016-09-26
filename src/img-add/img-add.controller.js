import Dropzone from 'dropzone';
import Blob from'blob';
import 'file-saver';

Dropzone.autoDiscover = false;

export default class NgImageAddController {
  constructor(imageService, $location, $http) {
    'ngInject';
    this.imageService = imageService;
    this.$location = $location;
    this.$http = $http;
  }

  $onInit() {
    console.log(__dirname);
    window.onload = () => {

      var myDropzone = new Dropzone("#my-awesome-dropzone", { url: "/"});
      myDropzone.on('drop', (event) => { console.log('Dropped file.') });
      myDropzone.on('addedfile', (file) => {
        console.log('Added file.');
        console.log(file);
        this.imageService.save(file)
      });
      myDropzone.on('complete', (file) => {
        console.log('Complete.');
        console.log(file);
        this.imageService.save(file)
      });
      myDropzone.on('error', (file, err) => { console.log('error.'); console.log(err); });
      myDropzone.on('thumbnail', (file, dataUrl) => {
        console.log('thumbnail.');
        this.imageService.save(file)
        console.log("dataUrl");
        this.imageService.save(dataUrl)
      });
    }
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
