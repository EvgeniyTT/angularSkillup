export default class imgService {
  constructor($http) {
    'ngInject';
    this.imgs = [];
    this.$http = $http;
    this.refresh();
  }

  refresh() {
    this.list().success(imgs => {
      this.imgs.length = 0;
      this.imgs.push(...imgs);
    });
  }

  add(img) {
    this.$http.post('http://localhost:3000/imgs', img).success(() => { this.refresh(); });
  }

  update(id, imgData) {
    this.$http.put(`http://localhost:3000/imgs/${id}`, imgData).success(() => { this.refresh(); });
  }

  save(img) {
    this.get(`?src=${img.src}`).then((response) => {
      if (response.data.length !== 0) {
        this.update(response.data[0].id, img);
      } else {
        this.add(img);
      }
    });
  }

  remove(id) {
    this.$http.delete(`http://localhost:3000/imgs/${id}`).success(() => { this.refresh(); });
  }

  list() {
    return this.$http.get('http://localhost:3000/imgs');
  }

  get(id) {
    return this.$http.get(`http://localhost:3000/imgs/${id}`);
  }

}
