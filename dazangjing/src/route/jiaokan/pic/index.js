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

    console.log(props.rectangleStore)
    this.state = {
      layouts: []
    }
  }
  onAddItem() {
    this.setState({
      layouts: [...this.state.layouts, 30]
    })
  }
  componentDidMount() {
    const { rectangleStore } = this.props
    rectangleStore.getImageServer()
  }
  handleSubmit() {
    const { rectangleStore } = this.props

  }
  onRemoveItem(index) {
    const {layouts} = this.state
    let layout = _.clone(layouts)
    layout.delete(index)
  }
  render() {
    const {rectangleStore} = this.props
    console.log(toJS(rectangleStore.rectangles))
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
              {rectangleStore.rectangles.length && <PicLines layouts={rectangleStore.rectangles} onRemoveItem={::this.onRemoveItem}/>}
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