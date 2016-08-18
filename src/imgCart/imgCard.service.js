export default class imgService {
  constructor($http) {
    'ngInject';
    this.imgs = [];
    this.$http = $http;
    this.$http.get('/src/assets/imgs.json').success(data => { this.imgs = data; });
  }
  add(img) {
    this.imgs.push(img);
  }
  remove(cart) {
    this.imgs = this.imgs.filter(obj => obj.src !== cart.img.src);
  }
}
