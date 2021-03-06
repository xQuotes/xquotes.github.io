import {
  toJS
} from 'mobx'
import {
  inject, observer
} from 'mobx-react'
import {
  Button, Select, Input
} from 'antd'
const ButtonGroup = Button.Group
const Option = Select.Option

import XQEditor from '../../XQEditor/'


import './text.less'
@inject("jingShuStore") @observer
export default class JiaoText extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { jingShuStore } = this.props
    jingShuStore.getTextServer()
  }
  handleSubmit() {
    const { jingShuStore } = this.props
    const text = toJS(jingShuStore).text
    jingShuStore.putTextServer({text})
  }
  onClick(text) {
    const { jingShuStore } = this.props
    jingShuStore.saveText({text})
  }
  render() {
    const {jingShuStore} = this.props
    return(
      <div className="jiao-text">
        <div className="jiao-text-top">
          <ButtonGroup>
            <Button>1</Button>
            <Button type="primary">上传</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>2</Button>
            <Button type="primary">隐藏标点</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>3</Button>
            <Button type="primary">切页</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>4</Button>
            <Button type="primary">小字符</Button>
            <Button type="primary">小字隔断</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>5</Button>
            <Select defaultValue="lucy" style={{ width: 120 }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>Disabled</Option>
              <Option value="yiminghe">yiminghe</Option>
            </Select>
          </ButtonGroup>
          <ButtonGroup>
            <Button>6</Button>
            <Button type="primary">文字切列</Button>
          </ButtonGroup>
        </div>
        <div className="jiao-text-main horizontal-tb">
          {
            jingShuStore.text && <XQEditor html={jingShuStore.text} onClick={::this.onClick}/>
          }
        </div>
        <div className="jiao-text-bottom">
          <Button>检查</Button>
          <Button type="primary" onClick={::this.handleSubmit}>保存</Button>
          <Button type="ghost">提交</Button>
        </div>
      </div>
      )
  }
}