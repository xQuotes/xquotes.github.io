import './pic.less'

import PicList from './picList'
import PicBtns from './picBtns'
import PicLines from './picLines'

export default class JiaoPic extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      layouts: [35, 14, 32, 32, 32, 32, 32]
    }
  }
  onAddItem() {
    this.setState({
      layouts: [...this.state.layouts, 30]
    })
  }
  onRemoveItem(index) {
    const {layouts} = this.state
    let layout = _.clone(layouts)
    console.log(layouts)
    layout.delete(index)
    console.log(layout)
    console.log(layouts)
  }
  render() {
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
              <PicLines layouts={this.state.layouts} onRemoveItem={::this.onRemoveItem}/>
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