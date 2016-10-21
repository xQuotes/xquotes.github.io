import {
  Button, Checkbox, Icon
} from 'antd'
var WidthProvider = require('react-grid-layout').WidthProvider
var ReactGridLayout = require('react-grid-layout')
ReactGridLayout = WidthProvider(ReactGridLayout)

export default class PicLines extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      layout: _.map(props.layouts, (v, k) => {
        return {
          i: k+'',
          w: v,
          h: 1,
          maxH: 1,
          y: 0,
          x: _.sum(_.dropRight(props.layouts, props.layouts.length-k))
        }
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    const {layouts: oldLayouts} = this.props
    const {layouts: newLayouts} = nextProps

    if(oldLayouts != newLayouts) {
      let layout = []

      layout = _.map(newLayouts, (v, k) => {
        return {
          i: k+'',
          w: v,
          h: 1,
          maxH: 1,
          y: 0,
          x: _.sum(_.dropRight(newLayouts, newLayouts.length-k))
        }
      })

      this.setState({
        layout: layout
      })
    }
  }
  onResize(layout,
                oldItem,
                newItem,
                placeholder,
                e,
                element) {
    let layoutData = layout,
    layoutDatas = [];
    console.log(layoutData)
    console.log(newItem)
    console.log(oldItem)
    layoutData[newItem.i] = newItem
    layoutDatas = _.map(layoutData, (v, k) => {
      return {
        i: k+'',
        w: v.w,
        h: 1,
        maxH: 1,
        y: 0,
        x: _.sumBy(_.dropRight(layoutData, layoutData.length-k), 'w')
      }
    })
    this.setState({
      layout: layoutDatas
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
      onResize: that.onResize.bind(that)
    }
    const { layout } = this.state
    const {onRemoveItem} = this.props
    
    return(
      <div className="pic-lines">
        <ReactGridLayout
          {...styles}
          layout={layout}>
          {_.map(layout, (value, key)=> {
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