export default class AddImgCtrl {
  constructor($scope, imgService) {
    this.$scope = $scope;
    this.imgService = imgService;
  }

  addImg() {
    let img = {};
    img.src = this.$scope.src;
    img.label = this.$scope.description;
    this.imgService.add(img);
  }
}
