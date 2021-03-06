import {observable} from 'mobx';

export default class RectangleModel {
  store;
  i;
  @observable w;
  @observable h;
  @observable maxH;
  @observable y;
  @observable x;

  @observable del;

  constructor(store, i, w, h, maxH, y, x, del) {
    this.store = store;
    this.i = i;
    this.w = w;
    this.h = h;
    this.maxH = maxH;
    this.y = y;
    this.x = x;

    this.del = del;
  }

  destroy() {
    console.log(this.del)
    this.del = !this.del
    console.log(this.del)
  }

  update(formData) {
    this.w = formData.w || this.w;
    this.h = formData.h || this.h;
    this.maxH = formData.maxH || this.maxH;
    this.y = formData.y || this.y;
    this.x = formData.x || this.x;
  }

  toJS() {
    return {
      i: this.i,
      w: this.w,
      h: this.h,
      maxH: this.maxH,
      y: this.y,
      x: this.x,
      del: this.del,
    }
  }

  static fromJS(store, object) {
    return new RectangleModel(
      store,
      object.i,
      object.w,
      object.h,
      object.maxH,
      object.y,
      object.x,
      object.del
    )
  }
}