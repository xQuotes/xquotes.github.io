import {
  toJS
} from 'mobx'
import {
  inject, observer
} from 'mobx-react'
import {
  Button, Checkbox, Icon
} from 'antd'
var WidthProvider = require('react-grid-layout').WidthProvider
var ReactGridLayout = require('react-grid-layout')
ReactGridLayout = WidthProvider(ReactGridLayout)

@inject("zangjingStore") @observer
export default class PicLines extends React.Component {
  constructor(props) {
    super(props)
  }
  onResize(layout,
                oldItem,
                newItem,
                placeholder,
                e,
                element) {
    let layoutData = _.clone(layout)
    let nowItem = layout[parseInt(newItem.i)]
    let lastItem = layout[parseInt(newItem.i)+1]

    if (!!lastItem && newItem.w - oldItem.w < lastItem.w) {
      layoutData[parseInt(newItem.i)+1].x = lastItem.x + (newItem.w - oldItem.w)
      layoutData[parseInt(newItem.i)+1].w = lastItem.w - (newItem.w - oldItem.w)
    }


  }
  render() {
    const that = this
    const styles = {
      width: 800,
      cols: 800,
      className: 'layout',
      rowHeight: 550,
      height: 550,
      margin: [0, 0],
      padding: [0, 0],
      isDraggable: false,
      onResizeStop: that.onResize.bind(that)
    }
    const {zangjingStore} = this.props
    return(
      <div className="pic-lines">
        <ReactGridLayout
          {...styles}
          layout={zangjingStore.zangjings.toJS()}>
          {_.map(zangjingStore.zangjings, (zangjing, key)=> {
            return <div key={zangjing.i} className="pic-line">
              <div className="pic-line-close">
                <Icon type="close" onClick={zangjing.destroy.bind(zangjing)}/>
              </div>
              <div className="pic-line-checkbox">
                <Checkbox></Checkbox>
              </div>
              <div className="pic-line-num">
                {key}
              </div>
            </div>
          })}
        </ReactGridLayout>
      </div>

      )
  }
}