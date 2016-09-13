module.exports = {
  path: 'backend',
  // component: require('./index')['default']
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index'))
    })
  }
}