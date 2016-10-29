import {
  inject, observer
} from 'mobx-react'
import {
  Pagination,
  Breadcrumb,
  Button
} from 'antd'
import {
  browserHistory,
  Link
} from 'react-router'
import Img from 'Img'
import './dashboard.less'

import Url from 'Url'

import Yunchuli from '../dazangjing/yuchuli/'

@inject(
  'dashboardStore'
)
@observer
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {dashboardStore} = this.props
    const {bcData} = dashboardStore
    return(
      <div className="ant-layout-aside">
        <div className="layout-spinner"></div>
        <div className="ant-layout-main">
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>当前任务：</Breadcrumb.Item>
              {
                _.map(bcData, (v, k)=> {
                  return <Breadcrumb.Item key={k}>{v}</Breadcrumb.Item>
                })
              }
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-container-header">
              <div className="ant-layout-pagination">
                <Pagination showQuickJumper defaultCurrent={2} total={500} />
              </div>
              <div className="ant-layout-btngroup">
                <Button type="ghost" size="large">整卷提交</Button>
                <Button type="ghost" size="large">提交当前页</Button>
                <Button type="ghost" size="large">保存</Button>
                <Button type="ghost" shape="circle" icon="question-circle" />
              </div>
            </div>
            <div className="ant-layout-content">
              <div style={{ height: '100%' }}>
                {this.props.children || <Yunchuli />}
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
            龙泉寺藏经组 © 2016
          </div>
        </div>
      </div>
      )
  }
}
