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


@inject("jingShuStore") @observer
export default class Proofread extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { jingShuStore } = this.props
    !jingShuStore.text && jingShuStore.getTextServer()
  }
  onClick(text) {
    const { jingShuStore } = this.props
    jingShuStore.saveText({text})
  }
  handleSubmit() {
    const { jingShuStore } = this.props
    const text = toJS(jingShuStore).text
    jingShuStore.putTextServer({text})
  }
  render() {
    const {jingShuStore} = this.props
    return(
      <div className="proofread">
        <div>
          <Link to="/jiao"><Button>校</Button></Link>
          <Link to="/dui"><Button>对</Button></Link>
        </div>
        <div className="proofread-main">
          <div className="editor proofread-main-editor">
            {!!jingShuStore.text && <ColorfulEditor
              text={toJS(jingShuStore.text)}
              onClick={::this.onClick}
              handleSubmit={::this.handleSubmit}/>}
          </div>
        </div>
      </div>
      )
  }
}