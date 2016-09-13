import './remote.less'

export default class Remote extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="nginx-app">
        <div className="nginx">
          <div className="nginx-header">
            <h1 className="nginx-h2">nginx</h1>
          </div>
          <div className="nginx-body">
            <h3>开启gzip压缩</h3>
            <pre>
              gzip              on;
              gzip_buffers      16 8k;
              gzip_comp_level   9;
              gzip_min_length   1024;
              #gzip_types        text/plain application/vnd.ms-excel application/msword;
              gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
              gzip_vary         on;
            </pre>
          </div>
          <div className="nginx-footer">
          </div>
        </div>
      </div>
      )
  }
}