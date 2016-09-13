import './frontend.less'

export default class Frontend extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="frontend-app">
        <div className="frontend">
          <div className="frontend-header">
            <h2 className="frontend-h2">前端开发</h2>
            <h3>FrontEnd</h3>
          </div>
          <div className="frontend-body">
            <div>
            </div>
          </div>
          <div className="frontend-footer">

          </div>
        </div>
      </div>
      )
  }
}