export default ($routeProvider) => {
  'ngInject';
  $routeProvider
  .when('/images', {
    template: '<ng-img-gallery></ng-img-gallery>'
  })
  .when('/details/:_id?', {
    template: '<ng-img-details></ng-img-details>'
  })
  .when('/about', {
    template: '<h1>Galley Inc.</h1><p>Probably, the best image gallery in the NIX office.</p>'
  })
  .otherwise({
    redirectTo: '/images'
  });
};
