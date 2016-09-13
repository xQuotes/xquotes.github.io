import './backend.less'

export default class Backend extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="backend-app">
        <div className="backend">
          <div className="backend-header">
            <h2 className="backend-h2">后端开发</h2>
            <h3>BackEnd</h3>
          </div>
          <div className="backend-body">
            <div>
              <ul>
                <li>Docker</li>
                <li>RESTful API</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div className="backend-footer">

          </div>
        </div>
      </div>
      )
  }
}