export default class imgService {
  constructor($http) {
    this.imgs = [];
    this.$http = $http;
  }
  add(img) {
    this.imgs.push(img);
  }
  list() {
    return this.$http.get('/src/assets/imgs.json').success(data => this.imgs = data);
  }
  remove(cart) {
    this.imgs = this.imgs.filter(obj => obj.src !== cart.img.src);
  }
}
