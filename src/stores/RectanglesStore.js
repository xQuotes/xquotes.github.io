import {observable, computed, reaction} from 'mobx'
import RectangleModel from '../models/RectangleModel'


export default class RectangleStore {
  @observable rectangles = [];


  addRectangle (formData) {
    this.todos.push(new TodoModel(this,
      i: formData.i,
      w: formData.w,
      h: formData.h || 1,
      maxH: formData.maxH || 1,
      y: formData.y,
      x: formData.x,
      del: formData.del || false
    ))
  }

  toJS() {
    return this.rectangles.map(rectangle => rectangle.toJS());
  }

  static fromJS(array) {
    const rectangleStore = new RectangleStore()
    rectangleStore.rectangles = array.map(item => TodoModel.fromJS(todoStore, item))
    return rectangleStore
  }
}

