export default class imgService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.url = 'http://10.10.54.24:3001';
  }

  get(userName, repository) {
    console.log(`${this.url}/git/${userName}/${repository}`);
    return this.$http.get(`${this.url}/git/${userName}/${repository}`);
  }

  // get(userName, repository) {
  //   return this.$http.get(`${this.url}/git`);
  // }

}
