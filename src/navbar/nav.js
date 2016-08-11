var nav = angular.module('nav', []);

nav.directive('ngNavbar', function() {
  return {
    restrict: 'A',
    templateUrl: '../navbar/nav.html',
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
});
