export default class ImageCardController {
  constructor(imageService, $window, $document, $element, $scope) {
    'ngInject';
    this.imageService = imageService;
    this.$scope = $scope;
    this.$window = $window;
    this.$document = $document[0];
    this.$element = $element[0];
    this.deleteConfirm = false;
    this.images = [];
    this.amountToRequest = 10;
    this.skip = 0;
    this.scrollListener = () => {
      const lastImage = this.$element.querySelector('.gallery-list .in-list:last-child');
      let lastImageOffset
      if (lastImage) {
        lastImageOffset = lastImage.offsetTop + lastImage.clientHeight;
      }
      const pageOffset = this.$window.pageYOffset + this.$window.innerHeight;
      if (pageOffset > lastImageOffset && this.loaded !== this.skip && !this.isInLoading) {
        this.showMore();
      }
    };
    this.url = API_HOST;
  }

  $onInit() {
    this.showMore();
    this.$document.addEventListener('scroll', this.scrollListener);
    this.toDelete = false;
  }

  deleteImage(imageScope) {
    const image = this.$element.querySelectorAll('.in-list')[imageScope.$index];
    image.addEventListener('transitionend', (event) => {
      if (event.propertyName === 'opacity') {
        this.images = this.images.filter((el) => { return el._id != imageScope.image._id; });
        this.$scope.$digest();
      }
    });
    this.imageService.remove(imageScope.image._id)
                    .then((result) => {
                      if (result.data.ok === 1) {
                        imageScope.hide = true;
                      }
                    });
  }

  showMore() {
    this.isInLoading = true;
    this.loaded = this.skip;
    this.imageService.list(this.skip, this.amountToRequest).then((result) => {
      this.images = this.images.concat(result.data);
      this.skip = this.skip + result.data.length;
      this.isInLoading = false;
    });
  }

  $onDestroy() {
    this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
