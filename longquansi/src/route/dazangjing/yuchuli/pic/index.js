import {
  toJS
} from 'mobx'
import {
  inject, observer
} from 'mobx-react'

import './pic.less'

import PicLines from './picLines'

@inject("zangjingStore") @observer
export default class JiaoPic extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {zangjingStore} = this.props
    return(
      <div className="jiao-pic">
        <div className="jiao-pic-bottom">
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