import {
  Row, Col,
  Pagination,
  Button
} from 'antd'

export default class PicList extends React.Component {
  render() {
    return(
      <Row className="jiao-pic-list">
        <Col span="21">
          <Pagination showQuickJumper defaultCurrent={2} total={500} />
        </Col>
        <Col span="3">
          <Button size="large">整卷提交</Button>
        </Col>
      </Row>
      )
  }
}