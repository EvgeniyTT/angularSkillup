
export default angular.module('nav', [])
  .directive('ngNavbar', function() {
    return {
      restrict: 'A',
      templateUrl: '/src/navbar/nav.html',
      controller: function() {
        this.menus = [
          {
            label: 'All Images',
            href: '#'
          },
          {
            label: 'Details',
            href: 'https://docs.angularjs.org/api/ng/directive/ngSubmit'
          },
          {
            label: 'About Us',
            href: '#'
          }
        ];
      },
      controllerAs: 'navCtrl'
    };
  }).name
