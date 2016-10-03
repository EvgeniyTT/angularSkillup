import Dropzone from 'dropzone';

Dropzone.autoDiscover = false;

export default class dropzoneController {
  constructor($scope, $element) {
    'ngInject';
    this.$scope = $scope;
    this.$element = $element;
  }

  $onInit() {
    // this.myDropzone = new Dropzone(this.$element.find('#my-awesome-dropzone')[0], {
    this.myDropzone = new Dropzone(this.$element.find('form')[0], {
      url: `${API_HOST}/images`,
      autoProcessQueue: false
    });
    this.myDropzone.on('thumbnail', (file, dataUrl) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.$scope.upperController.myImage = reader.result;
        this.$scope.upperController.$scope.$digest();
      };
    });
    this.myDropzone.on('error', (file, err) => { console.log('error', err); });
  }
}
