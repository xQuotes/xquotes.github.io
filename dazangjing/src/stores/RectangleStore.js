import {observable, computed, action} from 'mobx'
import RectangleModel from '../models/RectangleModel'
import Fetch from 'Fetch'
import Api from 'Api'
import * as Utils from 'Utils';


export default class RectangleStore {
  @observable rectangles = []
  @observable isLoading = false

  getImageServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.getJingShuImage,
      data: formData,
      method: 'get',
      success: (data) => {
        this.isLoading = false
        this.rectangles = data.rectangles
      },
      error: (data) => {
        this.isLoading = false
        this.rectangles = data.rectangles
      }
    })
  }

  addRectangle (formData) {
    this.todos.push(new TodoModel(this,
      id= Utils.uuid(),
      w= formData.w,
      h= formData.h || 1,
      maxH= formData.maxH || 1,
      y= formData.y,
      x= formData.x,
      del= formData.del || false
    ))
  }

  // toJS() {
  //   return this.rectangles.map(rectangle => rectangle.toJS());
  // }

  static fromJS(array = []) {
    const rectangleStore = new RectangleStore()
    // rectangleStore.rectangles = array.map(item => RectangleModel.fromJS(rectangleStore, item))
    return rectangleStore
  }
}

