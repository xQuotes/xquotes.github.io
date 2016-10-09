import './jiaokan.less'

import JiaoPic from './pic/'
import JiaoText from './text/'

export default class Jiaokan extends React.Component {
  render() {
    return(
      <div className="jiaokan">
        <div className="jiaokan-left">
          <JiaoPic />
        </div>
        <div className="jiaokan-right">
          <JiaoText />
        </div>
      </div>
      )
  }
}