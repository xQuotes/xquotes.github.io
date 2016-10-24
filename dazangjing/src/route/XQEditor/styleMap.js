import {
  Button
} from 'antd'
import {
  CompositeDecorator
} from 'draft-js'


export const bgColorStyleMap = {
  bgPurple: {
    backgroundColor: 'purple'
  },
  bgBlue: {
    backgroundColor: 'blue'
  },
  bgOrange: {
    backgroundColor: 'orange'
  },
  bgYellow: {
    backgroundColor: 'yellow'
  },
  // style
  smallFont: {
    fontSize: '12px'
  }
}

export const BGCOLORS = [
  {type: 'bg', label: '广义异体字', style: 'bgPurple'},
  {type: 'bg', label: '广义正字', style: 'bgBlue'},
  {type: 'bg', label: '易错字词', style: 'bgOrange'},
  {type: 'bg', label: '难字', style: 'bgYellow'}
]

class BgButton extends React.Component {
  constructor(props) {
    super(props)
    this.onToggle = (e) => {
      e.preventDefault()
      this.props.onToggle(this.props.style)
    }
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

export class BgColorControls extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var currentStyle = this.props.editorState.getCurrentInlineStyle()
    return (
      <div className="editor-controls">
        {BGCOLORS.map((type, key) =>
          <BgButton
            key={key}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={this.props.onToggle}
            style={type.style}/>
        )}
      </div>
    )
  }
}

export const STYLECOLORS = [
  {type: 'style', label: '小字', style: 'smallFont'}
]

class StyleButton extends React.Component {
  constructor(props) {
    super(props)
    this.onToggle = (e) => {
      e.preventDefault()
      this.props.onToggle(this.props.style)
    }
  }

  render() {
    let {active, label, style} = this.props
    return (
      <Button type="ghost" onMouseDown={this.onToggle}>
        {this.props.label}
      </Button>
    );
  }
}

export class StyleColorControls extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var currentStyle = this.props.editorState.getCurrentInlineStyle()
    return (
      <div className="editor-controls">
        {STYLECOLORS.map((type, key) =>
          <BgButton
            key={key}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={this.props.onToggle}
            style={type.style}/>
        )}
      </div>
    )
  }
}

const styles = {
  root: {
    fontFamily: '\'Helvetica\', sans-serif',
    padding: 20,
    width: 600,
  },
  editor: {
    border: '1px solid #ddd',
    cursor: 'text',
    fontSize: 16,
    minHeight: 40,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
  handle: {
    color: 'rgba(98, 177, 254, 1.0)',
    direction: 'ltr',
    unicodeBidi: 'bidi-override',
  },
  hashtag: {
    color: 'rgba(95, 184, 138, 1.0)',
  },
}
