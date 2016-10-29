import {
  inject, observer
} from 'mobx-react'
import {
  Button, Select, Icon
} from 'antd'
const Option = Select.Option

import JinshuPic from './pic/'
import JinshuText from './text/'

import './yuchuli.less'

@inject(
  'zangjingStore', 'dashboardStore'
  )
@observer
export default class Yunchuli extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const bcData = ['预处理', '丽再', '菩萨戒', '第 1 卷']
    const {dashboardStore} = this.props
    dashboardStore.putDashboard(bcData)
  }
  render() {
    return(
      <div className="z-yuchuli">
        <div className="yuchuli-main">
          <div className="yuchuli-main-left">
            <div className="yuchuli-btngroup yuchuli-btngroup-left">
              <Button type="ghost" size="large">整页略过</Button>
              <Button type="ghost" size="large">整页打回</Button>
              <Button type="ghost" size="large">切列检查</Button>
            </div>
            <div className="yuchuli-pic">
              <JinshuPic />
            </div>
          </div>
          <div className="yuchuli-main-right">
            <div className="yuchuli-btngroup yuchuli-btngroup-right">
              <div className="ant-btn ant-btn-ghost ant-btn-lg">
                切列字数: 
                <Select defaultValue="5" style={{ width: 45 }}>
                  {_.map(_.range(5, 20), (v, k) => {
                    return <Option value={v+''} key={k}>{v}</Option>
                  })}
                </Select>
              </div>
              <Button type="ghost" size="large">插入分页符</Button>
              <Button type="ghost" size="large">小字</Button>
              <Button type="ghost" size="large">隔断</Button>
              <div className="ant-btn ant-btn-ghost ant-btn-lg">
                字号: 
                <Icon type="plus-circle-o" style={{
                  fontSize: 16
                }}/>
                <Icon type="minus-circle-o" style={{
                  fontSize: 16,
                  marginLeft: 5
                }}/>
              </div>
            </div>
            <div className="yuchuli-text">
              <JinshuText />
              <div className="yuchuli-upload-btn">
                <Button type="ghost" className="vertical-btn">上传文本</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}
