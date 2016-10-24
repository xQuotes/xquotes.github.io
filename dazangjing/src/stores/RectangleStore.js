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
        this.rectangles = _.map(JSON.parse(data.rectangles), (rectangle) => {
          this.addRectangle(rectangle)
        })
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  addRectangle (formData) {
    this.rectangles.push(new RectangleModel(this,
      Utils.uuid(),
      formData.w,
      formData.h || 1,
      formData.maxH || 1,
      formData.y,
      formData.x,
      formData.del || false
    ))
  }

  toJS() {
    return this.rectangles.map(rectangle => rectangle.toJS());
  }

  static fromJS(array = []) {
    const rectangleStore = new RectangleStore()
    console.log(rectangleStore)
    rectangleStore.rectangles = array.map(item => RectangleModel.fromJS(rectangleStore, item))

    console.log(rectangleStore)
    return rectangleStore
  }
}

