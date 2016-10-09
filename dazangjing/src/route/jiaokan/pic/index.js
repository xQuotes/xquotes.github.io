import './pic.less'

import PicList from './picList'
import PicBtns from './picBtns'
import PicLines from './picLines'

export default class JiaoPic extends React.Component {
  render() {
    return(
      <div className="jiao-pic">
        <div className="jiao-pic-top">
          <PicList />
        </div>
        <div className="jiao-pic-bottom">
          <div className="jiao-pic-btngroup">
            <PicBtns />
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