module.exports = {
  path: 'v1',
  // component: require('./index')['default'],
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index')['default'])
    })
  }
  // getChildRoutes(location, callback) {
  //   require.ensure([], function (require) {
  //     callback(null, [
  //       require('../logout')['default']
  //     ])
  //   })
  // }
}