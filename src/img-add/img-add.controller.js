export default class AddImgCtrl {
  constructor(imgService, $scope) {
    'ngInject';
    this.$scope = $scope;
    this.imgService = imgService;
    this.id = 100;
  }

  addImg() {
    let img = {};
    img.src = this.$scope.src;
    img.label = this.$scope.description;
    this.newId = Math.max.apply(null, this.imgService.imgs.map(img => {return img.id;})) + 1;
    img.id = this.newId;
    let curDate = new Date();
    img.dateAdded = [curDate.getMonth() + 1, curDate.getDate(), curDate.getFullYear()].join('/');
    this.imgService.add(img);
    this.$scope.src = '';
    this.$scope.description = '';
  }
}
