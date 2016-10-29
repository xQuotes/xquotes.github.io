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

import XQEditor from '../../../components/editor/'


import './text.less'
@inject("zangjingStore") @observer
export default class JiaoText extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { zangjingStore } = this.props
    // zangjingStore.getTextServer()
  }
  handleSubmit() {
    const { zangjingStore } = this.props
    const text = toJS(zangjingStore).text
    zangjingStore.putTextServer({text})
  }
  onClick(text) {
    const { zangjingStore } = this.props
    zangjingStore.saveText({text})
  }
  render() {
    const {zangjingStore} = this.props
    zangjingStore.text = '大藏经'
    return(
      <div className="jiao-text-main horizontal-tb">
        <XQEditor html={zangjingStore.text} onClick={::this.onClick}/>
      </div>
      )
  }
}