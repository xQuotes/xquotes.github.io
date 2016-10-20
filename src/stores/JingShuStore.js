import {
  observable, computed, reaction, action
} from 'mobx'

import Api from 'Api'
import Fetch from 'Fetch'

export default class JingShuStore {
  @observable text = ''
  @observable isLoading = false

  @action getTextServer(formData) {
    this.isLoading = true
    Fetch({
      url: Api.getJingShuText,
      data: formData,
      method: 'get',
      success: (data) => {
        this.isLoading = false
        this.text = data.text
      },
      error: (data) => {
        this.isLoading = false
        this.text = data.text
      }
    })
  }

  static fromJS() {
    const jingShuStore = new JingShuStore()
    return jingShuStore
  }

}