import './scrum.less'

export default class Scrum extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="scrum-app">
        <div className="scrum">
          <div className="scrum-header">
            <h2 className="scrum-h2">敏捷开发</h2>
            <h3>Scrum</h3>
          </div>
          <div className="scrum-body">
            <div>
              <ul>
                <li>Scrum/月</li>
                <li>Sprint/周</li>
              </ul>
            </div>
          </div>
          <div className="scrum-footer">

          </div>
        </div>
      </div>
      )
  }
}