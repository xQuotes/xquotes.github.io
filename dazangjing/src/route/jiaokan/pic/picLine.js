import {
  Button, Checkbox, Icon
} from 'antd'

export default class PicLine extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {value} = this.props
    return(
      <div className="pic-line" style={{
        width: value.width,
        borderLeftColor: '#2db7f5'
      }}>
        <div className="pic-line-close">
          <Icon type="close" />
        </div>
        <div className="pic-line-checkbox">
          <Checkbox></Checkbox>
        </div>
        <div className="pic-line-num">
          {value.key}
        </div>
      </div>
      )
  }
}