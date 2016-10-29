module.exports = {
  userStore: require('./UserStore')['default'].fromJS(),
  dashboardStore: require('./DashboardStore')['default'].fromJS(),
  zangjingStore: require('./ZangjingStore')['default'].fromJS()
}