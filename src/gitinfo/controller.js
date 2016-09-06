export default class NgGitInfoController {
  constructor(gitService, $http) {
    'ngInject';
    this.$http = $http;
    this.gitService = gitService;
  }

  async $onInit() {
      // without service and api
      try {
        const packageInfoJson = (await this.$http.get('/package.json')).data;
        const gitUserName = packageInfoJson.repository.url.split('/')[3];
        const gitRepository = packageInfoJson.repository.url.split('/')[4].split('.')[0];
        this.gitReposInfo1 = (await this.$http.get(`https://api.github.com/repos/${gitUserName}/${gitRepository}`)).data;
      } catch (e) {
        console.log(e);
      }
      // with service and api
      try {
        const packageInfoJson = (await this.$http.get('/package.json')).data;
        const gitUserName = packageInfoJson.repository.url.split('/')[3];
        const gitRepository = packageInfoJson.repository.url.split('/')[4].split('.')[0];
        this.gitReposInfo2 = (await this.gitService.get(gitUserName, gitRepository)).data;
      } catch (e) {
        console.log(e);
      }
  }
}
