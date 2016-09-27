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
    window.onload = () => {
      const myDropzone = new Dropzone("#my-awesome-dropzone", { url: "http://10.10.54.24:3001/images"});
      Dropzone.options.myAwesomeDropzone = {
        thumbnailWidth: '200px',
        thumbnailHeight: '150px'
      };

      myDropzone.on('drop', (event) => { console.log('Dropped file.') });
      myDropzone.on('addedfile', (file) => {
        // console.log('Added file.');
        // console.log(file);
        // this.imageService.save(file)
      });
      myDropzone.on('complete', (file) => {
        // console.log('Complete.');
        // console.log(file);
        // this.imageService.save(file)
        // this.imageService.save(JSON.stringify({baba:"baba"}))
      });
      myDropzone.on('error', (file, err) => { console.log('error.'); console.log(err); });
      myDropzone.on('thumbnail', (file, dataUrl) => {
        console.log('thumbnail');
        console.log(file);

        console.log("dataUrl");
        console.log(dataUrl);

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
