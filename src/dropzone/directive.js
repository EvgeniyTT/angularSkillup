import controller from './controller';

export default () => ({
  restrict: 'AC',
  controller,
  controllerAs: 'dropzoneController',
  scope: {
    setImage: '&',
  },
  bindToController: true
});
