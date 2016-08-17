export default $routeProvider => {
  $routeProvider
  .when('/allImages', {
    template: `<h1>All Images</h1></br>
              <ng-img-gallery></ng-img-gallery>
              <hr/>
              <ng-add-img-form></ng-add-img-form>`
  })
  .when('/details', {
    template: '<ng-img-details ></ng-img-details>'
  })
  .when('/aboutUs', {
    template: '<h1>Galley Inc.</h1><p>Probably, the best image gallery in the NIX office.</p>'
  })
  .otherwise({
    redirectTo: '/allImages'
  });
};
