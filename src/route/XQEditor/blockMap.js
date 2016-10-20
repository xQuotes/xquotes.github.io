import React from 'react'
import Immutable from 'immutable'
import Draft from 'draft-js'

class SmallBlock extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span className='small-block'>
        {this.props.children}
      </span>
    );
  }
}

const blockRenderMap = Immutable.Map({
  'SmallBlock': {
    element: 'span',
    wrapper: <SmallBlock {...this.props}/>
  }
})

export const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap)

