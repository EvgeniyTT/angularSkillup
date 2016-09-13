import ng from 'angular';
import NgGitDirective from './directive';
import NgGitService from './service';

export default ng.module('gitInfo', [])
  .directive('ngGit', NgGitDirective)
  .service('gitService', NgGitService)
  .name;
