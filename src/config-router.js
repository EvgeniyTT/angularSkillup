export default $routeProvider => {
  $routeProvider
  .when('/images', {
    template: `<h1>All Images</h1></br>
              <ng-img-gallery></ng-img-gallery>
              <hr/>
              <ng-img-add-form></ng-img-add-form>`
  })
  .when('/details/:id?', {
    template: '<ng-img-details></ng-img-details>'
  })
  .when('/about', {
    template: '<h1>Galley Inc.</h1><p>Probably, the best image gallery in the NIX office.</p>'
  })
  .otherwise({
    redirectTo: '/images'
  });
};
