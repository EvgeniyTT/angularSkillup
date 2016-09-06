export default class imgService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.url = 'http://10.10.54.24:3001';
  }

  get(userName, repository) {
    return this.$http.get(`${this.url}/git/${userName}/${repository}`);
  }
}
