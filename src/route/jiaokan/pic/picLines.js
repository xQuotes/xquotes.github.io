import {
  toJS
} from 'mobx'
import {
  observer
} from 'mobx-react'
import {
  Button, Checkbox, Icon
} from 'antd'
var WidthProvider = require('react-grid-layout').WidthProvider
var ReactGridLayout = require('react-grid-layout')
ReactGridLayout = WidthProvider(ReactGridLayout)

@observer
export default class PicLines extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.layouts)
    this.state = {
      layout: toJS(props.layouts)
      // _.map(props.layouts, (v, k) => {
      //   return {
      //     i: k+'',
      //     w: v,
      //     h: 1,
      //     maxH: 1,
      //     y: 0,
      //     x: _.sum(_.dropRight(props.layouts, props.layouts.length-k))
      //   }
      // })
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   const {layouts: oldLayouts} = this.props
  //   const {layouts: newLayouts} = nextProps

  //   if(oldLayouts != newLayouts) {
  //     let layout = []

  //     layout = _.map(newLayouts, (v, k) => {
  //       return {
  //         i: k+'',
  //         w: v,
  //         h: 1,
  //         maxH: 1,
  //         y: 0,
  //         x: _.sum(_.dropRight(newLayouts, newLayouts.length-k))
  //       }
  //     })

  //     this.setState({
  //       layout: layout
  //     })
  //   }
  // }
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

    // layoutDatas[newItem.i] = newItem
    // layoutDatas = layoutData
    // _.map(layoutData, (v, k) => {
    //   return {
    //     i: k+'',
    //     w: v.w,
    //     h: 1,
    //     maxH: 1,
    //     y: 0,
    //     x: _.sumBy(_.dropRight(layoutData, layoutData.length-k), 'w')
    //   }
    // })
    this.setState({
      layout: layoutData
    })

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
    const { layout } = this.state
    console.log(layout)
    const {onRemoveItem} = this.props
    
    return(
      <div className="pic-lines">
        <ReactGridLayout
          {...styles}
          layout={layout}>
          {_.map(layout, (value, key)=> {
            console.log(value)
            return <div key={value.i} className="pic-line">
              <div className="pic-line-close">
                <Icon type="close" onClick={onRemoveItem.bind(that, value.i)}/>
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