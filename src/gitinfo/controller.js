export default class NgGitInfoController {
  constructor(gitService, $timeout, $scope) {
    'ngInject';
    this.$timeout = $timeout;
    this.$scope = $scope;
    this.gitService = gitService;
  }

  $onInit() {
    const self = this;

    // FRONT END
    function* getGitInfo() {
      self.git = {};
      try {
        let packageInfo = yield fetch('/package.json');
        let gitInfo = yield packageInfo.json();
        let gitUserName = gitInfo.repository.url.split('/')[3];
        let gitRepository = gitInfo.repository.url.split('/')[4].split('.')[0];
        let githubFetch = yield fetch(`https://api.github.com/repos/${gitUserName}/${gitRepository}`);
        let githubFetchInfo = yield githubFetch.json();

        self.git.avatar_url = githubFetchInfo.owner.avatar_url;
        self.git.username = githubFetchInfo.owner.login;
        self.git.repository = githubFetchInfo.name;
        self.git.created = githubFetchInfo.created_at;
        self.git.updated = githubFetchInfo.updated_at;
        self.git.size = githubFetchInfo.size;
        self.git.clone_url = githubFetchInfo.clone_url;
        self.$scope.$digest();

        return self;
      } catch(e) {
        console.log(e);
      }
    }
    function executeGenerator(generator, yieldValue) {
      let next = generator.next(yieldValue);
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
          // self.gitBE = gitData.data;
          self.gitBE = {};
          self.gitBE.avatar_url = gitData.data.owner.avatar_url;
          self.gitBE.username = gitData.data.owner.login;
          self.gitBE.repository = gitData.data.name;
          self.gitBE.created = gitData.data.created_at;
          self.gitBE.updated = gitData.data.updated_at;
          self.gitBE.size = gitData.data.size;
          self.gitBE.clone_url = gitData.data.clone_url;
        });
      });
    });
  }
}
