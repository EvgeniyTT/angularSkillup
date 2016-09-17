export default class ImageCardController {
  constructor(imageService, $window, $document, $element) {
    'ngInject';
    this.imageService = imageService;
    this.$window = $window;
    this.$document = $document[0];
    this.$element = $element[0];
    this.deleteConfirm = false;
    this.images = [];
    this.amountToRequest = 10;
    this.skip = 0;
    this.scrollListener = () => {
      const lastImage = this.$element.querySelector('.gallery-list .in-list:last-child');
      const lastImageOffset = lastImage.offsetTop + lastImage.clientHeight;
      const pageOffset = this.$window.pageYOffset + this.$window.innerHeight;
      if (pageOffset > lastImageOffset && this.loaded !== this.skip && !this.isInLoading) {
        this.showMore();
      }
    };
  }

  $onInit() {
    this.showMore();
    this.$document.addEventListener('scroll', this.scrollListener);
  }

  deleteImage(scope) {
    let image = this.$element.querySelector('.flipper')[scope.$index];
    console.log(image);
    // this.imageService.remove(image.image._id)
    //                 .then((result) => {
    //                   if (result.data.ok == 1) {
    //                     this.images = this.images.filter((el) => { return el._id != image.image._id; });
    //                   }
    //                 });
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
