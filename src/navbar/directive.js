import NgNavCtrl from './controller';

export default () => ({
  restrict: 'E',
  templateUrl: '/src/navbar/nav.html',
  controller: NgNavCtrl,
  controllerAs: 'navCtrl'
});
