import {
  Row, Col,
  Icon, Select, Button
} from 'antd'
const Option = Select.Option
import {
  Editor, EditorState,
  RichUtils, Modifier
} from 'draft-js'

import './proofread.less'

class ColorfulEditor extends React.Component {
  constructor(props) {
    super(props)
    var html = '菩薩戒  羯磨文彌勒菩薩說沙門玄奘奉詔譯受戒羯磨第一若諸菩薩欲學菩薩三聚淨戒。或是在家或是出家。先於無上正等菩提發弘願已。當審訪求同法菩薩。已發大願有智有力。於語表義能授能開。於如是等功德具足。勝菩薩所先禮雙足。偏袒右肩膝輪據地。合掌恭敬如是請言大德憶念我如是名。於大德所乞受一切菩薩淨戒。唯願須臾不辭勞倦。哀慜聽授〈第二第三亦如是說〉既作如是無倒請已。偏袒右肩恭敬禮拜。供養十方三世諸佛世尊。已入大地得大智慧得大神通。諸菩薩眾。現前專念彼諸功德生殷淨心若諸菩薩。欲授菩薩菩薩戒時。先應為說菩薩法藏摩呾理迦。菩薩學處及犯處相。令其聽受。以慧觀察自所意樂。堪能思擇受菩薩戒。非唯他勸非為勝他。當知是名堅固菩薩。堪受菩薩淨戒律儀。以受戒法如應正授。其受戒菩薩復於彼有智有力。勝菩薩所。謙下恭敬膝輪據地。對佛像前合掌請言。唯願大德。哀慜授我菩薩淨戒。如是請已。專念一境長養淨心。我今不久當得無盡無量無上大功德藏。即隨思惟如是事義。默然而住爾時有智有力菩薩於彼能行正行菩薩。以無亂心若坐若立。而作是言。汝如是名善男子。聽汝。是菩薩不。彼應答言是。發菩提願未。應答言已發。自此已後應作是言。汝如是名善男子。聽汝等。今者欲於我所受諸菩薩一切學處。受諸菩薩一切淨戒。謂律儀戒。攝善法戒。饒益有情戒。如是學處如是淨戒過去一切菩薩已具。未來一切菩薩當具。普於十方現在一切菩薩今具。於是學處於是淨戒。過去一切菩薩已學。未來一切菩薩當學。現在一切菩薩今學。汝能受不。答言能受。能授菩薩第二第三亦如是說。能受菩薩第二第三亦如是答。如是受已。能受菩薩不起于座。能授菩薩對佛像前。普於十方現住諸佛及諸菩薩。恭敬供養頂禮雙足。作是白言。仰啟十方無邊無際。諸世界中諸佛菩薩。今於此中現有某名菩薩。於我某菩薩所。乃至三說受菩薩戒。我為作證。唯願十方無邊無際諸世界中諸佛菩薩。第一真聖於現不現一切時處。一切有情皆現覺者。於此某名受戒菩薩亦為作證。第二第三亦如是說。如是受戒羯磨畢竟。從此無間。普於十方無邊無際諸世界中現住諸佛。已入大地諸菩薩前。法爾相現由此表示。如是菩薩已受菩薩所受淨戒。爾時十方諸佛菩薩。覩是菩薩法爾之相生起'
    
    this.state = {
      editorState: EditorState.createEmpty()
    }

    this.focus = () => this.refs.editor.focus()
    this.onChange = (editorState) => this.setState({editorState})
    this.toggleColor = (toggledColor) => this._toggleColor(toggledColor)
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

  _toggleColor(toggledColor) {
    const {editorState} = this.state;
    const selection = editorState.getSelection();

    // Let's just allow one color at a time. Turn off all active colors.
    const nextContentState = Object.keys(colorStyleMap)
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

  render() {
    const {editorState} = this.state;
    return (
      <div className="editor-root">
        <BgColorControls
          editorState={editorState}
          onToggle={this.toggleColor}/>
        <div className="editor-main" onClick={this.focus}>
          <Editor
            customStyleMap={colorStyleMap}
            handleKeyCommand={::this.handleKeyCommand}
            editorState={editorState}
            onChange={this.onChange}
            placeholder=""
            ref="editor"/>
        </div>
      </div>
    );
  }
}

class StyleButton extends React.Component {
  constructor(props) {
    super(props);
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let {active, label, style} = this.props
    return (
      <Button type="ghost" onMouseDown={this.onToggle}>
        {this.props.label} <span className={`${this.props.style}-square`}></span>
      </Button>
    );
  }
}

var BGCOLORS = [
  {type: 'bg', label: '广义异体字', style: 'purple'},
  {type: 'bg', label: '广义正字', style: 'blue'},
  {type: 'bg', label: '易错字词', style: 'orange'},
  {type: 'bg', label: '难字', style: 'yellow'}
];

const BgColorControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="editor-controls">
      {BGCOLORS.map((type, key) =>
        <StyleButton
          key={key}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}/>
      )}
    </div>
  );
}

const colorStyleMap = {
  purple: {
    backgroundColor: 'purple'
  },
  blue: {
    backgroundColor: 'blue'
  },
  orange: {
    backgroundColor: 'orange'
  },
  yellow: {
    backgroundColor: 'yellow'
  }
}

export default class Proofread extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      family: 'Microsoft YaHei',
      lineHeight: 24,
      letterSpacing: 1,
      editorState: EditorState.createEmpty(),
      html: '菩薩戒  羯磨文彌勒菩薩說沙門玄奘奉詔譯受戒羯磨第一若諸菩薩欲學菩薩三聚淨戒。或是在家或是出家。先於無上正等菩提發弘願已。當審訪求同法菩薩。已發大願有智有力。於語表義能授能開。於如是等功德具足。勝菩薩所先禮雙足。偏袒右肩膝輪據地。合掌恭敬如是請言大德憶念我如是名。於大德所乞受一切菩薩淨戒。唯願須臾不辭勞倦。哀慜聽授〈第二第三亦如是說〉既作如是無倒請已。偏袒右肩恭敬禮拜。供養十方三世諸佛世尊。已入大地得大智慧得大神通。諸菩薩眾。現前專念彼諸功德生殷淨心若諸菩薩。欲授菩薩菩薩戒時。先應為說菩薩法藏摩呾理迦。菩薩學處及犯處相。令其聽受。以慧觀察自所意樂。堪能思擇受菩薩戒。非唯他勸非為勝他。當知是名堅固菩薩。堪受菩薩淨戒律儀。以受戒法如應正授。其受戒菩薩復於彼有智有力。勝菩薩所。謙下恭敬膝輪據地。對佛像前合掌請言。唯願大德。哀慜授我菩薩淨戒。如是請已。專念一境長養淨心。我今不久當得無盡無量無上大功德藏。即隨思惟如是事義。默然而住爾時有智有力菩薩於彼能行正行菩薩。以無亂心若坐若立。而作是言。汝如是名善男子。聽汝。是菩薩不。彼應答言是。發菩提願未。應答言已發。自此已後應作是言。汝如是名善男子。聽汝等。今者欲於我所受諸菩薩一切學處。受諸菩薩一切淨戒。謂律儀戒。攝善法戒。饒益有情戒。如是學處如是淨戒過去一切菩薩已具。未來一切菩薩當具。普於十方現在一切菩薩今具。於是學處於是淨戒。過去一切菩薩已學。未來一切菩薩當學。現在一切菩薩今學。汝能受不。答言能受。能授菩薩第二第三亦如是說。能受菩薩第二第三亦如是答。如是受已。能受菩薩不起于座。能授菩薩對佛像前。普於十方現住諸佛及諸菩薩。恭敬供養頂禮雙足。作是白言。仰啟十方無邊無際。諸世界中諸佛菩薩。今於此中現有某名菩薩。於我某菩薩所。乃至三說受菩薩戒。我為作證。唯願十方無邊無際諸世界中諸佛菩薩。第一真聖於現不現一切時處。一切有情皆現覺者。於此某名受戒菩薩亦為作證。第二第三亦如是說。如是受戒羯磨畢竟。從此無間。普於十方無邊無際諸世界中現住諸佛。已入大地諸菩薩前。法爾相現由此表示。如是菩薩已受菩薩所受淨戒。爾時十方諸佛菩薩。覩是菩薩法爾之相生起'
    }
  }
  onChange(editorState) {
    console.log(editorState)
    this.setState({editorState})
  }
  execCommand(command, arg, bool) {
    console.log(command, arg, bool)
    document.execCommand(command, bool, arg)
  }
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  render() {
    const {
      editorState,
      family, lineHeight, letterSpacing
    } = this.state

    return(
      <div className="proofread">
        <div className="proofread-header">
        </div>
        <div className="proofread-main">
          <Row className="proofread-main-btngroup">
            <Col span="2">
              字间距：
              <Icon type="plus-circle-o" onClick={this.execCommand.bind(this, 'plus')}/>
              <Icon type="minus-circle-o" onClick={this.execCommand.bind(this, 'minus')}/>
            </Col>
            <Col span="2">
              字高：
              <Icon type="plus-circle-o" onClick={this.execCommand.bind(this, 'plus')}/>
              <Icon type="minus-circle-o" onClick={this.execCommand.bind(this, 'minus')}/>
            </Col>
            <Col span="3">
            字体：
            <Select defaultValue="Microsoft YaHei" onChange={::this.execCommand}>
              <Option value="Simsun">中易宋体</Option>
              <Option value="SimHei">中易黑体</Option>
              <Option value="Microsoft YaHei">微软雅黑</Option>
              <Option value="华文细黑">华文细黑</Option>
            </Select>
            </Col>
            <Col span="11">
              <Button type="ghost" onClick={this.execCommand.bind(this, 'bold')}>小字</Button>
              <Button type="ghost">全选</Button>
              <Button type="ghost">{'<<'}</Button>
              <Button type="ghost">查字</Button>
            </Col>
            <Col span="6">
              <Button onClick={this._onBoldClick.bind(this)}>Bold</Button>
              <Button type="ghost" onClick={this.execCommand.bind(this, 'caret-down')}>
                批注 <Icon type="caret-down" />
              </Button>
              <Button type="ghost" onClick={this.execCommand.bind(this, 'InsertInputText', 'C', false)}>残字 C</Button>
              <Button type="ghost" onClick={this.execCommand.bind(this, 'InsertInputText', 'F', false)}>模糊字 F</Button>
            </Col>
          </Row>
          <div className="editor proofread-main-editor">
            <ColorfulEditor />
          </div>
        </div>
      </div>
      )
  }
}