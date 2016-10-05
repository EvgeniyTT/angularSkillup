export default class NgImageAddController {
  constructor(imageService, $location, $http, $scope, $sce) {
    'ngInject';
    this.imageService = imageService;
    this.$location = $location;
    this.$http = $http;
    this.$scope = $scope;
    this.myImage = '';
    this.myCroppedImage = ''; // in this variable you will have dataUrl of cropped area.
    this.savedImage = {};
    this.imageUrl = $sce.trustAsResourceUrl(`${API_HOST}/images`);
  }

  setImage(image) {
    this.myImage = image;
    this.$scope.$digest();
  }

  addImg() {
    const image = {
      name: this.name,
      description: this.description,
      data: this.myImage,
      dateAdded: new Date(),
      thumbnailData: this.myCroppedImage,
      thumbnailX: this.$scope.cropper.cropImageLeft,
      thumbnailY: this.$scope.cropper.cropImageTop,
      thumbnailWidth: this.$scope.cropper.cropImageWidth,
      thumbnailHeight: this.$scope.cropper.cropImageHeight,
    };
    this.imageService.save(image).then((result) => {
      this.savedImage.id = result.data._id;
      this.savedImage.name = result.data.name;
      this.savedImage.description = result.data.description;
      this.savedImage.dateAdded = result.data.dateAdded;
      this.saved = true;
      setTimeout(() => {
        this.saved = false;
        this.$scope.$digest();
      }, 3000);
    });
    // .then(() => { this.refreshListOnSave(); }); // using 'scope'
    // this.imageService.save(image).then(() => { this.imgCardController.$onInit(); }); // using 'require'
    this.name = '';
    this.description = '';
  }
}
