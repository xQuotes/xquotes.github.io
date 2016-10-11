import {
  Row, Col,
  Icon, Select, Button
} from 'antd'
const Option = Select.Option

import './proofread.less'

// http://blog.csdn.net/yiluoak_47/article/details/7542800

export default class Proofread extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      family: 'Microsoft YaHei',
      lineHeight: 24,
      letterSpacing: 1,
      html: '菩薩戒  羯磨文彌勒菩薩說沙門玄奘奉詔譯受戒羯磨第一若諸菩薩欲學菩薩三聚淨戒。或是在家或是出家。先於無上正等菩提發弘願已。當審訪求同法菩薩。已發大願有智有力。於語表義能授能開。於如是等功德具足。勝菩薩所先禮雙足。偏袒右肩膝輪據地。合掌恭敬如是請言大德憶念我如是名。於大德所乞受一切菩薩淨戒。唯願須臾不辭勞倦。哀慜聽授〈第二第三亦如是說〉既作如是無倒請已。偏袒右肩恭敬禮拜。供養十方三世諸佛世尊。已入大地得大智慧得大神通。諸菩薩眾。現前專念彼諸功德生殷淨心若諸菩薩。欲授菩薩菩薩戒時。先應為說菩薩法藏摩呾理迦。菩薩學處及犯處相。令其聽受。以慧觀察自所意樂。堪能思擇受菩薩戒。非唯他勸非為勝他。當知是名堅固菩薩。堪受菩薩淨戒律儀。以受戒法如應正授。其受戒菩薩復於彼有智有力。勝菩薩所。謙下恭敬膝輪據地。對佛像前合掌請言。唯願大德。哀慜授我菩薩淨戒。如是請已。專念一境長養淨心。我今不久當得無盡無量無上大功德藏。即隨思惟如是事義。默然而住爾時有智有力菩薩於彼能行正行菩薩。以無亂心若坐若立。而作是言。汝如是名善男子。聽汝。是菩薩不。彼應答言是。發菩提願未。應答言已發。自此已後應作是言。汝如是名善男子。聽汝等。今者欲於我所受諸菩薩一切學處。受諸菩薩一切淨戒。謂律儀戒。攝善法戒。饒益有情戒。如是學處如是淨戒過去一切菩薩已具。未來一切菩薩當具。普於十方現在一切菩薩今具。於是學處於是淨戒。過去一切菩薩已學。未來一切菩薩當學。現在一切菩薩今學。汝能受不。答言能受。能授菩薩第二第三亦如是說。能受菩薩第二第三亦如是答。如是受已。能受菩薩不起于座。能授菩薩對佛像前。普於十方現住諸佛及諸菩薩。恭敬供養頂禮雙足。作是白言。仰啟十方無邊無際。諸世界中諸佛菩薩。今於此中現有某名菩薩。於我某菩薩所。乃至三說受菩薩戒。我為作證。唯願十方無邊無際諸世界中諸佛菩薩。第一真聖於現不現一切時處。一切有情皆現覺者。於此某名受戒菩薩亦為作證。第二第三亦如是說。如是受戒羯磨畢竟。從此無間。普於十方無邊無際諸世界中現住諸佛。已入大地諸菩薩前。法爾相現由此表示。如是菩薩已受菩薩所受淨戒。爾時十方諸佛菩薩。覩是菩薩法爾之相生起'
    }

  }
  onChange(e) {
    console.log('changed', e);
    var editor = this.refs.editor.getDOMNode();
     var newHtml = editor.innerHTML;

     console.log('newHtml: ', newHtml);

    this.setState({html: newHtml}, function() {
      this.props.onChange({
        target: {
          value: newHtml
        }
      });
    }.bind(this));
  }
  execCommand(command, bool, arg) {
    document.execCommand(command, bool, arg)
  }
  handleSelectChange(value) {
    console.log(value)
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
  handleBgColor(color) {
    console.log(color)
    document.execCommand('formatBlock', false, '<bold>')
  }
  handleMark(icon) {
    console.log(icon)
  }
  handleReplace(word) {
    console.log(word)
  }
  render() {
    const {
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
              <Icon type="plus-circle-o" onClick={this.handleLineHeight.bind(this, 'plus')}/>
              <Icon type="minus-circle-o" onClick={this.handleLineHeight.bind(this, 'minus')}/>
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
            <Col span="11">
              <Button type="ghost" onClick={this.execCommand.bind(this, 'bold')}>小字</Button>
              <Button type="ghost">全选</Button>
              <Button type="ghost" onClick={this.execCommand.bind(this, 'BackColor', true, 'purple')}>
                广义异体字 <span className="purple-square"></span>
              </Button>
              <Button type="ghost" onClick={this.execCommand.bind(this, 'BackColor', true, 'blue')}>
                广义正字 <span className="blue-square"></span>
              </Button>
              <Button type="ghost" onClick={this.execCommand.bind(this, 'BackColor', true, 'orange')}>
                易错字词 <span className="orange-square"></span>
              </Button>
              <Button type="ghost">{'<<'}</Button>
              <Button type="ghost">查字</Button>
            </Col>
            <Col span="6">
              <Button type="ghost" onClick={this.execCommand.bind(this, 'BackColor', true, 'yellow')}>
                难字 <span className="yellow-square"></span>
              </Button>
              <Button type="ghost" onClick={this.handleMark.bind(this, 'caret-down')}>
                批注 <Icon type="caret-down" />
              </Button>
              <Button type="ghost" onClick={this.handleReplace.bind(this, 'C')}>残字 C</Button>
              <Button type="ghost" onClick={this.handleReplace.bind(this, 'F')}>模糊字 F</Button>
            </Col>
          </Row>
          <div className="proofread-main-editor">
            <span id="editor" contentEditable={true}
              ref="editor"
              onFocus={::this.onChange}
              onInput={::this.onChange}
              style={{
                fontFamily: family,
                lineHeight: lineHeight+'px',
                wordSpacing: '8px',
                letterSpacing: letterSpacing+'px'
              }}
              dangerouslySetInnerHTML={{__html: this.state.html}}>
            </span>
          </div>
        </div>
      </div>
      )
  }
}