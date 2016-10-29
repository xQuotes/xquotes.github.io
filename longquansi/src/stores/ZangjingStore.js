import {
  observable, computed, action
} from 'mobx'

import Fetch from 'Fetch'
import Api from 'Api'
import 'Arr'

export default class ZangjingStore {
  @observable isLoading = false
  @observable zangjings = []
  @observable fields = {}
  @observable updateFields = {}
  @observable searchFields = {}

  @observable searchDatas = {}

  @observable visible = false
  @observable params = {}

  @action setSearchDatas(formData) {
    this.searchDatas = formData
  }

  @action getServers(formData) {
    this.isLoading = true
    this.setSearchDatas(formData)
    
    Fetch({
      url: Api.getZangjings,
      data: {
        conditions: formData,
        params: {}
      },
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.zangjings = data.list
        this.fields = data.fields
        this.searchFields = data.search_fields
        this.updateFields = data.update_fields
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  @action deleteServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.deleteZangjing,
      data: {
        conditions: {
          id: formData.id
        },
        params: {}
      },
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.zangjings = this.zangjings.deleteById(formData.id)
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  @action postServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.postZangjing,
      data: {
        conditions: formData,
        params: {}
      },
      method: 'post',
      success: (data) => {
        this.isLoading = false
        this.zangjings.push(data)
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  @action putServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.putZangjing,
      data: {
        conditions: formData,
        params: {}
      },
      method: 'post',
      success: (data) => {
        this.isLoading = false
        let index = this.zangjings.getIndexById(data.id)
        this.zangjings[index] = data
      },
      error: (data) => {
        this.isLoading = false
      }
    })
  }

  toggleVisible() {
    this.visible = !this.visible
  }

  setParams(formData) {
    this.params = formData
  }

  toJS() {
    return this.zangjings.map(zangjing => zangjing)
  }

  static fromJS(array = []) {
    return new ZangjingStore()
  }
}

