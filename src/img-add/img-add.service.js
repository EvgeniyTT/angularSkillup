export default class addImgService {
  constructor(imgService) {
    'ngInject';
    this.imgService = imgService;
  }

  addImage(src, description) {
    let image = {};
    image.src = src;
    image.label = description;
    this.newId = Math.max.apply(null, this.imgService.imgs.map(img => {return img.id;})) + 1;
    image.id = this.newId;
    let curDate = new Date();
    image.dateAdded = [curDate.getMonth() + 1, curDate.getDate(), curDate.getFullYear()].join('/');
    this.imgService.add(image);
  }
}
