import {admin} from 'Url'

module.exports = {
  path: `/${admin}`,
  component: require('./jiaokan')['default'],
  getChildRoutes(location, callback) {
    require.ensure([], function (require) {
      callback(null, [
        require('./jiaokan/route')
        // require('./report/route')
      ])
    })
  },
}
