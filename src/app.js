import "./style/app.less"
import {
  Provider
} from 'mobx-react'
import Root from './containers/index'

import UserStore from './stores/UserStore'
import JingShuStore from './stores/JingShuStore'

ReactDOM.render(
  (<Provider  userStore={UserStore.fromJS()}
    jingShuStore={JingShuStore.fromJS()}>
    <Root />
  </Provider>),
  document.getElementById('react')
)