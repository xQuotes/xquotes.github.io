import {
  Button, Checkbox, Icon
} from 'antd'
var WidthProvider = require('react-grid-layout').WidthProvider
var ReactGridLayout = require('react-grid-layout')
ReactGridLayout = WidthProvider(ReactGridLayout)

import PicLine from './picLine'


const layouts = [
  {i: '0', w: 20},
  {i: '1', w: 30},
  {i: '2', w: 20}
]

export default class PicLines extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      layout: [{
        i: '0',
        w: '20',
        h: 1,
        maxH: 1,
        y: 0,
        x: 0
      }]
    }
  }
  // componentWillReceiveProps
  componentWillMount() {
    let layout = []

    layout = _.map(layouts, (v, k) => {
      return {
        i: v.i,
        w: v.w,
        h: 1,
        maxH: 1,
        y: 0,
        x: _.sumBy(_.dropRight(layouts, layouts.length-k), 'w')
      }
    })

    this.setState({
      layout: layout
    })

  }
  onResize(layout,
                oldItem,
                newItem,
                placeholder,
                e,
                element) {
    let layoutData = layout,
    layoutDatas = []
    layoutData[newItem.i] = newItem
    layoutDatas = _.map(layoutData, (v, k) => {
      return {
        i: v.i,
        w: v.w,
        h: 1,
        maxH: 1,
        y: 0,
        x: _.sumBy(_.dropRight(layoutData, layouts.length-k), 'w')
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
    
    return(
      <div className="pic-lines">
        <ReactGridLayout
          {...styles}
          layout={layout}>
          {_.map(layout, (value, key)=> {
            return <div key={value.i} className="pic-line">
              <div className="pic-line-close">
                <Icon type="close" />
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