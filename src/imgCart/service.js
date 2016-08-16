export default class imgService {
  constructor($http) {
    this.imgs = [];
    this.$http = $http;
    this.$http.get('/src/assets/imgs.json').success(data => { this.imgs = data });
    console.log(this.imgs)
  }
  add(img) {
    this.imgs.push(img);
  }
  list() {
    return this.imgs
  }
  remove(cart) {
    this.imgs = this.imgs.filter(obj => obj.src !== cart.img.src);
  }
}
