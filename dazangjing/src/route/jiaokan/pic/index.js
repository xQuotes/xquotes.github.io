import {
  toJS
} from 'mobx'
import {
  inject, observer
} from 'mobx-react'

import './pic.less'

import PicList from './picList'
import PicBtns from './picBtns'
import PicLines from './picLines'

@inject("rectangleStore") @observer
export default class JiaoPic extends React.Component {
  constructor(props) {
    super(props)
  }
  onAddItem() {
    const {rectangleStore} = this.props
    rectangleStore.addRectangle({
      w: 36,
      y: 0,
      x: _.sumBy(rectangleStore.rectangles, 'w'),
    })
  }
  componentDidMount() {
    const { rectangleStore } = this.props
    rectangleStore.getImageServer()
  }
  handleSubmit() {
    const { rectangleStore } = this.props

  }
  render() {
    const {rectangleStore} = this.props
    return(
      <div className="jiao-pic">
        <div className="jiao-pic-top">
          <PicList />
        </div>
        <div className="jiao-pic-bottom">
          <div className="jiao-pic-btngroup">
            <PicBtns onAddItem={::this.onAddItem}/>
          </div>
          <div className="jiao-pic-group">
            <div className="jiao-pic-rowgroup">
              <PicLines />
            </div>
            <div className="jiao-pic-main">
              <img className="jiao-img"
                src="https://nerddan.github.io/canon/dist/u693.jpg"/>
            </div>
          </div>
        </div>
      </div>
      )
  }
}