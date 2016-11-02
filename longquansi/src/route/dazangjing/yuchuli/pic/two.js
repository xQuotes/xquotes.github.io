import {
  toJS
} from 'mobx'
import {
  Button
} from 'antd'
import {
  inject, observer
} from 'mobx-react'
import {
  Link
} from 'react-router'

import ColorfulEditor from './colorfulEditor'


@inject("zangjingStore") @observer
export default class Proofread extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { zangjingStore } = this.props
    !zangjingStore.text && zangjingStore.getTextServer()
  }
  onClick(text) {
    const { zangjingStore } = this.props
    zangjingStore.saveText({text})
  }
  handleSubmit() {
    const { zangjingStore } = this.props
    const text = toJS(zangjingStore).text
    zangjingStore.putTextServer({text})
  }
  render() {
    const {zangjingStore} = this.props
    return(
      <div className="jiao-pic">
        <ColorfulEditor
          text={toJS(zangjingStore.text)}
          onClick={::this.onClick}
          handleSubmit={::this.handleSubmit}/>
      </div>
      )
  }
}