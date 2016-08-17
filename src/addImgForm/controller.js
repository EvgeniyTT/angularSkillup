export default class AddImgCtrl {
  constructor(imgService, $scope) {
    this.$scope = $scope;
    this.imgService = imgService;
  }

  addImg() {
    let img = {};
    img.src = this.$scope.src;
    img.label = this.$scope.description;
    let curDate = new Date();
    img.dateAdded = [curDate.getMonth() + 1, curDate.getDate(), curDate.getFullYear()].join('/');
    this.imgService.add(img);
  }
}
