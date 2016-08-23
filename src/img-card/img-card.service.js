export default class imgService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  add(img) {
    return this.$http.post('http://localhost:3000/imgs', img);
  }

  update(id, imgData) {
    return this.$http.put(`http://localhost:3000/imgs/${id}`, imgData);
  }

  save(img) {
    return this.get(img.id).then(() => { return this.update(img.id, img); },
                                 () => { return this.add(img); }
                                );
  }

  remove(id) {
    return this.$http.delete(`http://localhost:3000/imgs/${id}`);
  }

  list() {
    return this.$http.get('http://localhost:3000/imgs');
  }

  get(id) {
    return this.$http.get(`http://localhost:3000/imgs/${id}`);
  }
}
