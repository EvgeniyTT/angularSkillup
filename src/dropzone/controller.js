import Dropzone from 'dropzone';

Dropzone.autoDiscover = false;

export default class dropzoneController {
  constructor($scope, $element) {
    'ngInject';
    this.$scope = $scope;
    this.$element = $element;
  }

  $onInit() {
    this.myDropzone = new Dropzone(this.$element[0], {
      url: `${API_HOST}/images`,
      autoProcessQueue: false
    });
    this.myDropzone.on('thumbnail', (file, dataUrl) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.setImage({ image: reader.result });
      };
    });
    this.myDropzone.on('error', (file, err) => { console.log('error', err); });
  }
}
