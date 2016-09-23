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
      myDropzone.on('drop', function(event) { console.log('Dropped file.') });
      myDropzone.on('addedfile', function(file) { console.log('Added file.', file); });
      myDropzone.on('complete', function(file) { console.log('Complete.'); });
      myDropzone.on('error', function(file, err) { console.log('error.'); console.log(err); });
      myDropzone.on('thumbnail', (file, dataUrl) => {
        console.log('thumbnail.');
        console.log(file);
        console.log(dataUrl);

        var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
        saveAs(file);

        this.$http({
            method: 'POST',
            url: '/',
            data: dataUrl,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })

        // const fd = new FormData();
        // fd.append('file', file);
        // this.$http.post('/', dataUrl, {
        //     transformRequest: angular.identity,
        //     headers: {'Content-Type': undefined}
        // })
        // .success(function(){
        // })
        // .error(function(){
        // });

      });

      // Dropzone.options.myAwesomeDropzone = {
      //   init: function() {
      //     console.log('WRHERE');
      //     this.on('drop', function(event) { console.log('Dropped file.') });
      //     this.on('addedfile', function(file) { console.log('Added file.', file); });
      //     this.on('complete', function(file) { console.log('Complete.'); });
      //     this.on('error', function(file, err) { console.log('error.'); console.log(err); });
      //     this.on('thumbnail', function(file, dataUrl) { console.log('thumbnail.'); console.log(dataUrl); });
      //   }
      // };
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
