export default ($routeProvider) => {
  'ngInject';
  $routeProvider
  .when('/images', {
    template: '<image-gallery></image-gallery>'
  })
  .when('/add', {
    template: '<ng-img-add-form refresh-list-on-save="imgCardController.$onInit()"></ng-img-add-form>'
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
