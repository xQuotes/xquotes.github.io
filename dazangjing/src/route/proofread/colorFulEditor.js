import {
  Row, Col,
  Icon, Select, Button
} from 'antd'
const Option = Select.Option
import {
  Editor, EditorState, ContentState, convertToRaw,
  RichUtils, Modifier, cohnvertFromHTML, convertFromRaw,
  CompositeDecorator, DefaultDraftBlockRenderMap
} from 'draft-js'

import './proofread.less'
import '../XQEditor/xqeditor.less'
import {
  BgColorControls,
  bgColorStyleMap,

  StyleColorControls,
  styleColorStyleMap,

  handleStrategy,
  hashtagStrategy,
  HandleSpan,
  HashtagSpan
} from '../XQEditor/styleMap'
import {
  BlockControls,
  blockRenderMap
} from '../XQEditor/blockMap'

export default class ColorfulEditor extends React.Component {
  constructor(props) {
    super(props)
    var rawContent = props.text


    let compositeDecorator = new CompositeDecorator([
      {
        strategy: handleStrategy,
        component: HandleSpan,
      },
      {
        strategy: hashtagStrategy,
        component: HashtagSpan,
      }
    ])
    
    this.state = {
      family: 'Microsoft YaHei',
      lineHeight: 60,
      letterSpacing: 1,
      editorState: EditorState.createWithContent(
        convertFromRaw(rawContent)
      )
    }

    this.focus = () => this.refs.editor.focus()
    this.onChange = (editorState) => {
      const content = editorState.getCurrentContent()
      this.props.onClick(convertToRaw(content))

      this.setState({editorState})
    }

    this.toggleColor = (toggledColor) => this._toggleColor(toggledColor)
    this.toggleAllStyle = (toggledStyle) => this._toggleAllStyle(toggledStyle)
    this.toggleBlockType = (toggledStyle) => this._toggleBlockType(toggledStyle)

    this.logState = () => {
      const content = this.state.editorState.getCurrentContent()
      console.log(content.getPlainText())
      // console.log(content.getStyle())
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
  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleColor(toggledColor) {
    const {editorState} = this.state;
    const selection = editorState.getSelection();

    // Let's just allow one color at a time. Turn off all active colors.
    const nextContentState = Object.keys(bgColorStyleMap)
      .reduce((contentState, color) => {
        return Modifier.removeInlineStyle(contentState, selection, color)
      }, editorState.getCurrentContent());

    let nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    );

    const currentStyle = editorState.getCurrentInlineStyle();

    // Unset style override for current color.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, color) => {
        return RichUtils.toggleInlineStyle(state, color);
      }, nextEditorState);
    }

    // If the color is being toggled on, apply it.
    if (!currentStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        toggledColor
      );
    }

    this.onChange(nextEditorState);
  }

  handleSelectChange(value) {
    this.setState({
      family: value
    })
  }
  handleLineHeight(type) {
    const { lineHeight } = this.state
    this.setState({
      lineHeight: type =='plus' ? lineHeight + 1 : lineHeight - 1
    })
  }
  handleLetterSpacing(type) {
    const { letterSpacing } = this.state
    this.setState({
      letterSpacing: type =='plus' ? letterSpacing + 1 : letterSpacing - 1
    }) 
  }

  render() {
    const {
      family, lineHeight, letterSpacing, editorState
    } = this.state
    const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap)

    return (
      <div className="editor-root">
        <Row className="proofread-main-btngroup">
          <Col span="2">
            字间距：
            <Icon type="plus-circle-o" onClick={this.handleLetterSpacing.bind(this, 'plus')}/>
            <Icon type="minus-circle-o" onClick={this.handleLetterSpacing.bind(this, 'minus')}/>
          </Col>
          <Col span="2">
            字高：
            <Icon type="plus-circle-o" onClick={this.handleLetterSpacing.bind(this, 'plus')}/>
            <Icon type="minus-circle-o" onClick={this.handleLetterSpacing.bind(this, 'minus')}/>
          </Col>
          <Col span="3">
          字体：
          <Select defaultValue="Microsoft YaHei" onChange={::this.handleSelectChange}>
            <Option value="Simsun">中易宋体</Option>
            <Option value="SimHei">中易黑体</Option>
            <Option value="Microsoft YaHei">微软雅黑</Option>
            <Option value="华文细黑">华文细黑</Option>
          </Select>
          </Col>
          <Col span="8">
            <BgColorControls
              editorState={editorState}
              onToggle={this.toggleColor}/>
          </Col>
          <Col span="8">
            <StyleColorControls
              editorState={editorState}
              onToggle={this.toggleColor}/>
          </Col>
          <Col span="8">
            <BlockControls
              editorState={editorState}
              onToggle={this.toggleBlockType}/>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <Button type="ghost">小字</Button>
            <Button type="ghost">全选</Button>
            <Button type="ghost">{'<<'}</Button>
            <Button type="ghost">查字</Button>
          </Col>
          <Col span="6">
            <Button type="ghost">
              批注 <Icon type="caret-down" />
            </Button>
            <Button type="ghost">残字 C</Button>
            <Button type="ghost">模糊字 F</Button>
            <Button type="primary" onClick={this.props.handleSubmit}>保存数据</Button>
          </Col>
        </Row>
        <div className="editor-root-content">
          <div className="editor-content">
            <div className="pic-view">
              <ul className="pic-view-items">
                <li style={{
                  backgroundImage: 'url(https:\/\/nerddan.github.io/canon/dist/u693.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '800px auto',
                  backgroundPositionX: '-714px'
                }}></li>
                <li style={{
                  backgroundImage: 'url(https:\/\/nerddan.github.io/canon/dist/u693.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '800px auto',
                  backgroundPositionX: '-681px'
                }}></li>
                <li style={{
                  backgroundImage: 'url(https:\/\/nerddan.github.io/canon/dist/u693.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '800px auto',
                  backgroundPositionX: '-619px'
                }}></li>
                <li style={{
                  backgroundImage: 'url(https:\/\/nerddan.github.io/canon/dist/u693.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '800px auto',
                  backgroundPositionX: '-583px'
                }}></li>
                <li style={{
                  backgroundImage: 'url(https:\/\/nerddan.github.io/canon/dist/u693.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '800px auto',
                  backgroundPositionX: '-553px'
                }}></li>
                <li style={{
                  backgroundImage: 'url(https:\/\/nerddan.github.io/canon/dist/u693.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '800px auto',
                  backgroundPositionX: '-521px'
                }}></li>
                <li style={{
                  backgroundImage: 'url(https:\/\/nerddan.github.io/canon/dist/u693.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '800px auto',
                  backgroundPositionX: '-490px'
                }}></li>
              </ul>
            </div>
            <div className="editor-main vertical-rl" onClick={this.focus}
              style={{
                fontFamily: family,
                lineHeight: lineHeight+'px',
                letterSpacing: letterSpacing+'px'
              }}>
              <Editor
                customStyleMap={bgColorStyleMap}
                handleKeyCommand={::this.handleKeyCommand}
                editorState={editorState}
                onChange={this.onChange}
                blockRenderMap={extendedBlockRenderMap}
                placeholder=""
                ref="editor"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}