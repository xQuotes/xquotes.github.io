import './remote.less'

export default class Remote extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="remote-app">
        <div className="remote">
          <div className="remote-header">
            <h1 className="remote-h2">远程工作</h1>
            <h2>Remote</h2>
          </div>
          <div className="remote-body">
            <ul>
              <li>Teambition 管理项目</li>
              <li>Git 代码管理</li>
            </ul>
            <div>
              <h3>Git 代码管理</h3>
              <ul>
                <li>code review</li>
                <li>test case</li>
              </ul>
            </div>
          </div>
          <div className="remote-footer">
          </div>
        </div>
      </div>
      )
  }
}