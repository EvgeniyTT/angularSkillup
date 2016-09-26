export default class imageService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
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
    // return this.$http.post(`${this.url}/images`, img);

    const req = {
      method: 'POST',
      url: `${this.url}/images`,
      // headers: {
      //   'Content-Type': 'application/x-www-form-urlencoded'
      // },
      data: img
    }
    return this.$http(req);
  }

  update(_id, imgData) {
    return this.$http.put(`${this.url}/images/${_id}`, imgData);
  }

  save(img) {
    if (img._id) {
      return this.update(img._id, img);
    }
    return this.add(img);
  }

  remove(_id) {
    return this.$http.delete(`${this.url}/images/${_id}`);
  }

  list(skip, limit) {
    return this.$http.get(`${this.url}/images/${skip}/${limit}`);
  }

  get(_id) {
    return this.$http.get(`${this.url}/images/${_id}`);
  }

}
