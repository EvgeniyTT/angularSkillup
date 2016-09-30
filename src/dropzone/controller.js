
import Dropzone from 'dropzone';

Dropzone.autoDiscover = false;

export default class dropzoneController {
  constructor() {
  }

  $onInit() {
    this.myDropzone = new Dropzone('#my-awesome-dropzone', {
      url: `${API_HOST}/images`,
      autoProcessQueue: false
    });
    this.myDropzone.on('thumbnail', (file, dataUrl) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.myImage = reader.result;
        this.$scope.$digest();
      };
    });
    this.myDropzone.on('error', (file, err) => { console.log('error', err); });
  }
}
