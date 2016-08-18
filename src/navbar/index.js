
import ng from 'angular';
import NgNavDrctv from './navbar.directive';

export default ng.module('app.nav', [])
  .directive('ngNavbar', NgNavDrctv)
  .name;
