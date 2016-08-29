export default class imgService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    // this.url = 'http://localhost:3001';
    this.url = 'http://10.10.54.24:3001';
  }

  // JSON-SERVER
  // add(img) {
  //   return this.$http.post(`${this.url}/imgs`, img);
  // }
  //
  // update(id, imgData) {
  //   return this.$http.put(`${this.url}/imgs/${id}`, imgData);
  // }
  //
  // save(img) {
  //   if (img.id) {
  //     return this.update(img.id, img);
  //   }
  //   return this.add(img);
  // }
  //
  // remove(id) {
  //   return this.$http.delete(`${this.url}/imgs/${id}`);
  // }
  //
  // list() {
  //   return this.$http.get(`${this.url}/imgs`);
  // }
  //
  // get(id) {
  //   return this.$http.get(`${this.url}/${id}`);
  // }

  // NODE
  add(img) {
    return this.$http.post(`${this.url}/`, img);
  }

  update(id, imgData) {
    return this.$http.put(`${this.url}/${id}`, imgData);
  }

  save(img) {
    if (img.id) {
      return this.update(img.id, img);
    }
    return this.add(img);
  }

  remove(id) {
    return this.$http.delete(`${this.url}/${id}`);
  }

  list() {
    return this.$http.get(`${this.url}/allImages`);
  }

  get(id) {
    return this.$http.get(`${this.url}/${id}`);
  }

}
