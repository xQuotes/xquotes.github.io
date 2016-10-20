import {
  inject, observer
} from 'mobx-react'

import {
  Editor, convertToRaw, RichUtils, 
  EditorState, ContentState,
  Modifier, convertFromHTML
} from 'draft-js'
import {
  Button
} from 'antd'
var ButtonGroup = Button.Group

import './xqeditor.less'
@observer
export default class XQEditor extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.html)
    console.log(props.html.text)
    let text = ''
    this.state = {
      // family: 'Microsoft YaHei',
      // lineHeight: 60,
      // letterSpacing: 1,
      // EditorState.createEmpty()
      editorState: EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(text)
        )
      )
    }

    this.focus = () => this.refs.xqeditor.focus()
    this.onChange = (editorState) => this.setState({editorState})
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