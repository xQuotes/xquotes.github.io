import './dazangjing.less'

import Dashboard from '../dashboard/index'

export default class Dazangjing extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="dazangjing">
        <Dashboard {...this.props}/>
      </div>
      )
  }
}
