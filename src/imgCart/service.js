class imgService {
  constructor($http) {
    this.imgs = [];
    this.$http = $http;
  }
}

imgService.prototype.add = function (img) {
  this.imgs.push(img);
};

imgService.prototype.list = function() {
  return this.$http.get('/src/imgs.json').success(data => this.imgs = data);
}

imgService.prototype.remove = function (cart) {
  this.imgs = this.imgs.filter(obj => obj.src !== cart.img.src);
}

module.exports = imgService;
