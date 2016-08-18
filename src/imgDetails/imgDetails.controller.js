export default class imgDetailCtrl {

  constructor($scope, imgService, $routeParams, $location) {
    'ngInject';
    console.log('ctrl');
    this.$scope = $scope;
    this.imgService = imgService;
    this.$routeParams = $routeParams;
    this.$location = $location;

    $scope.$watch(
      function watchChange(scope) { return imgService.imgs; },
      (function handleChange() {
        if (!$routeParams.id) {
            $location.url('/details/' + imgService.imgs[0].id);
          }
        $scope.img = imgService.imgs.filter(img => {return img.id == $routeParams.id})[0];
        this.setFirstAndLast();
      }).bind(this)
    );
  }

  changeImgUrl() {
    this.$location.url('/details/' + this.$scope.img.id);
  }

  setFirstAndLast() {
    this.firstImg = this.isFirstImg();
    this.lastImg = this.isLastImg();
  }

  getCurImgIndex() {
    const imgs = this.imgService.imgs;
    const currentImgIndex = imgs.findIndex(img => { return img.id == this.$scope.img.id } );
    return [imgs, currentImgIndex];
  }

  isFirstImg() {
    const [imgs, currentImgIndex] = this.getCurImgIndex();
    return currentImgIndex === 0;
  }

  isLastImg() {
    const [imgs, currentImgIndex] = this.getCurImgIndex();
    return currentImgIndex === imgs.length - 1;
  }

  nextImg() {
    const [imgs, currentImgIndex] = this.getCurImgIndex();
    if (!this.isLastImg()) {
      this.$scope.img = imgs[currentImgIndex + 1];
      this.setFirstAndLast();
      this.changeImgUrl();
    }
  }

  prevImg() {
    const [imgs, currentImgIndex] = this.getCurImgIndex();
    if (!this.isFirstImg()) {
      this.$scope.img = imgs[currentImgIndex - 1];
      this.setFirstAndLast();
      this.changeImgUrl();
    }
  }
}
