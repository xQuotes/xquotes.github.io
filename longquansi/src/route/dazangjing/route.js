import {dazangjing} from 'Url'

module.exports = {
  path: `/${dazangjing}`,
  component: require('./index')['default'],
  getChildRoutes(location, callback) {
    require.ensure([], function (require) {
      callback(null, [
        require('./yuchuli/route'),
      ])
    })
  },
}