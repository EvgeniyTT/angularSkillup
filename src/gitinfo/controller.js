export default class NgGitInfoController {
  constructor(gitService, $scope) {
    'ngInject';
    this.$scope = $scope;
    this.gitService = gitService;
  }

  $onInit() {
    const self = this;
    // without service and api
    (async function foo() {
      try {
        const packageInfo = await(fetch('/package.json'));
        const packageInfoJson = await packageInfo.json();
        const gitUserName = packageInfoJson.repository.url.split('/')[3];
        const gitRepository = packageInfoJson.repository.url.split('/')[4].split('.')[0];
        const githubFetch = await fetch(`https://api.github.com/repos/${gitUserName}/${gitRepository}`);
        const githubFetchInfo = await(githubFetch.json());
        self.gitFE = githubFetchInfo;
        self.$scope.$digest();
      } catch (e) {
        console.log(e);
      }
    })();
    // with service and api
    (async () => {
      try {
        const packageInfo = await fetch('/package.json');
        const packageInfoJson = await packageInfo.json();
        const gitUserName = packageInfoJson.repository.url.split('/')[3];
        const gitRepository = packageInfoJson.repository.url.split('/')[4].split('.')[0];
        const gitServiceResponse = await this.gitService.get(gitUserName, gitRepository);
        self.gitBE = gitServiceResponse.data;
        self.$scope.$digest();
      } catch (e) {
        console.log(e);
      }
    })();
  }
}
