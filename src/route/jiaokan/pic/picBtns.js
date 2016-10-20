import { Button } from 'antd'

export default class PicBtns extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="pic-btns-group">
        <Button type="ghost" size="large">整页打回</Button>
        <Button type="ghost" size="large">整页略过</Button>
        <Button type="ghost" size="large"
          onClick={this.props.onAddItem}>增加切割线</Button>
        <Button type="ghost" size="large">图片切列</Button>
      </div>
      )
  }
}