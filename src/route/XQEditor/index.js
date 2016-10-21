import {
  inject, observer
} from 'mobx-react'
import Draft, {
  Editor, convertToRaw, RichUtils, 
  EditorState, ContentState,
  Modifier, convertFromHTML, convertFromRaw
} from 'draft-js'
import {
  Button
} from 'antd'
var ButtonGroup = Button.Group
import {
  convertText
} from 'Utils'

import './xqeditor.less'
@observer
export default class XQEditor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // family: 'Microsoft YaHei',
      // lineHeight: 60,
      // letterSpacing: 1,
      // editorState: EditorState.createEmpty()
      editorState: EditorState.createWithContent(
        convertText(props.html, Draft)
      )
    }

    this.focus = () => this.refs.xqeditor.focus()
    this.onChange = (editorState) => {
      const content = editorState.getCurrentContent()
      this.props.onClick(convertToRaw(content))

      this.setState({editorState})
    }
    this.logState = () => {
      const content = this.state.editorState.getCurrentContent()
      console.log(content.getPlainText())
      console.log(JSON.stringify(convertToRaw(content)))
    }
  }
  handleKeyCommand(command) {
    const {editorState} = this.state
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }
  render() {
    const {editorState, bar} = this.state
    return(
      <div className="xqeditor" onClick={this.focus}>
        <button onClick={this.logState}>获取数据</button>
        <Editor
          handleKeyCommand={::this.handleKeyCommand}
          editorState={editorState}
          onChange={this.onChange}
          placeholder=""
          ref="xqeditor"/>
      </div>
      )
  }
}