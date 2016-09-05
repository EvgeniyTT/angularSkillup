export default class NgGitInfoController {
  constructor(gitService, $scope) {
    'ngInject';
    this.$scope = $scope;
    this.gitService = gitService;
  }

  $onInit() {
    const self = this;
    // FRONT END
    function* getGitInfo() {
      try {
        const packageInfo = yield fetch('/package.json');
        const gitInfo = yield packageInfo.json();
        const gitUserName = gitInfo.repository.url.split('/')[3];
        const gitRepository = gitInfo.repository.url.split('/')[4].split('.')[0];
        const githubFetch = yield fetch(`https://api.github.com/repos/${gitUserName}/${gitRepository}`);
        const githubFetchInfo = yield githubFetch.json();
        self.gitFE = githubFetchInfo;
        self.$scope.$digest();
      } catch (e) {
        console.log(e);
      }
    }
    function executeGenerator(generator, yieldValue) {
      const next = generator.next(yieldValue);
      if (!next.done) {
        next.value.then(
        result => executeGenerator(generator, result),
        err => generator.throw(err)
        );
      }
    }
    executeGenerator(getGitInfo());
    // BACK END
    fetch('/package.json').then((result) => {
      result.json().then((filedata) => {
        const gitUserName = filedata.repository.url.split('/')[3];
        const gitRepository = filedata.repository.url.split('/')[4].split('.')[0];
        this.gitService.get(gitUserName, gitRepository).then((gitData) => {
          self.gitBE = gitData.data;
        });
      });
    });
  }
}
