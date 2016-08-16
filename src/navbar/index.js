
import ng from 'angular';
import NgNavDrctv from './directive';

export default ng.module('app.nav', [])
  .directive('ngNavbar', NgNavDrctv)
  .name;
