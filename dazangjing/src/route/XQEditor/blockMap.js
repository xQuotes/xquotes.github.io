import {
  Button
} from 'antd'
import React from 'react'
import Immutable from 'immutable'
import Draft from 'draft-js'

class SmallBlock extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <span className='small-block'>
        {this.props.children}
      </span>
    );
  }
}

export const blockRenderMap = Immutable.Map({
  'SmallBlock': {
    element: 'span',
    wrapper: <SmallBlock />
  }
})

export const BLOCKCOLORS = [
  {type: 'block', label: '换行', style: 'SmallBlock'}
]

class BlockButton extends React.Component {
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

export class BlockControls extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var currentStyle = this.props.editorState.getCurrentInlineStyle()
    return (
      <div className="editor-controls">
        {BLOCKCOLORS.map((type, key) =>
          <BlockButton
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