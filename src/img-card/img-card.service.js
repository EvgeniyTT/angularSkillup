export default class imgService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  add(img) {
    return this.$http.post('http://10.10.54.24:3000/imgs', img);
  }

  update(id, imgData) {
    return this.$http.put(`http://10.10.54.24:3000/imgs/${id}`, imgData);
  }

  save(img) {
    if (img.id) {
      return this.update(img.id, img);
    }
    return this.add(img);
  }

  remove(id) {
    return this.$http.delete(`http://10.10.54.24:3000/imgs/${id}`);
  }

  list() {
    return this.$http.get('http://10.10.54.24:3000/imgs');
  }

  get(id) {
    return this.$http.get(`http://10.10.54.24:3000/imgs/${id}`);
  }
}
