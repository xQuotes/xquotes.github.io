import {admin} from 'Url'

module.exports = {
  path: `/${admin}`,
  component: require('./index/index')['default'], // 设置'/${admin}'首页
  getChildRoutes(location, callback) {
    require.ensure([], function (require) {
      callback(null, [
        require('./jiaokan/route'),
        ...require('./proofread/route')
      ])
    })
  },
}
