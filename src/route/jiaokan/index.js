import {
  Button
} from 'antd'
import {
  Link
} from 'react-router'

import './jiaokan.less'

import JiaoPic from './pic/'
import JiaoText from './text/'

export default class Jiaokan extends React.Component {
  render() {
    return(
      <div className="jiaokan">
        <div>
          <Link to="/jiao"><Button>校</Button></Link>
          <Link to="/dui"><Button>对</Button></Link>
        </div>
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