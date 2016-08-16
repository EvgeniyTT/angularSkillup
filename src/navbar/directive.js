import NgNavCtrl from './controller';

export default () => ({
  restrict: 'A',
  templateUrl: '/src/navbar/nav.html',
  controller: NgNavCtrl,
  controllerAs: 'navCtrl'
});
