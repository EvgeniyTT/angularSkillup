export default class imgService {
  constructor($http) {
    'ngInject';
    this.imgs = [];
    this.$http = $http;
    this.refresh();
  }

  refresh() {
    this.list().success(imgs => {
      this.imgs.length = 0;
      this.imgs.push(...imgs);
    });
  }

  add(img) {
    this.$http.post('http://localhost:3000/imgs', img).success(() => { this.refresh(); });
  }

  remove(id) {
    this.$http.delete(`http://localhost:3000/imgs/${id}`).success(() => { this.refresh(); });
  }

  update(img) {
    this.$http.put('/src/assets/imgs.json').success(() => { this.refresh(); });
  }

  list() {
    return this.$http.get('http://localhost:3000/imgs');
  }

  get(id) {
    return this.$http.get(`http://localhost:3000/imgs/${id}`);
  }

}
