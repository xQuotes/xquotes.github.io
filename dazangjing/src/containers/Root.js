import {
  Router
} from 'react-router'

import App from './App'
import routes from '../route/route'

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: App,
    indexRoute: {
      component: require('../route/index')['default']
    },
    scrollBehavior: "scrollToTop",
    getChildRoutes(location, callback) {
      require.ensure([], function (require) {
        callback(null, routes)
      })
    }
  }]
}

export default class Root extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <Router routes={rootRoute} history={this.props.history}/>
      )
  }
}