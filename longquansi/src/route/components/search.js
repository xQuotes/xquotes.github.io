import {observer} from 'mobx-react'
import moment from 'moment'
import {
  Form, Input, Row, Col, Button,
  DatePicker
} from 'antd'
const FormItem = Form.Item

@Form.create()
@observer
export default class SearchForm extends React.Component {
  static propTypes = {
    form: React.PropTypes.object,
    store: React.PropTypes.object,
    title: React.PropTypes.array
  }
  constructor(props) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault()
    const {form, store} = this.props
    form.validateFields((errors, values) => {
      if (!!errors) {
        console.log('Errors in form!!!');
        return;
      }
      var searchData = _.pickBy(values)

      store.getServers(searchData)
    })
  }
  componentDidMount() {
    const { store } = this.props
    store.getServers(store.searchDatas)
  }
  handleReset(e) {
    console.log(e)
    e.preventDefault()
    const {form, store} = this.props
    form.resetFields()
    store.setSearchDatas({})
    console.log(store)
  }
  render() {
    const {form, store, title} = this.props
    const {getFieldDecorator} = form

    const searchDataTitile = _.map(title, (value, key) => {
     return _.assign({
        formType: 'Input',
        type: 'text',
        sm: 4,
        labelCol: 8,
        wrapperCol: 16,
        fieldOptions: {
          initialValue: ''
        },
        placeholder: ''
      }, value)
    })

    function formJsxType(formType, placeholder, type) {
      if(formType == 'DatePicker') {
        return <DatePicker />
      } else {
        return <Input autoCapitalize="off"
          placeholder={placeholder}
          type={type}
          size="default"/> 
      }
    }

    return(
      <Form horizontal className="ant-advanced-search-form">
        <Row gutter={5}>
          {_.map(searchDataTitile, (v, key)=> {
            return <Col sm={v.sm} key={key}>
              <FormItem
                label={v.label}
                labelCol={{ span: v.labelCol }}
                wrapperCol={{ span: v.wrapperCol }}>
                {getFieldDecorator(v.name, v.fieldOptions)(
                  formJsxType(v.formType, v.placeholder, v.type)
                )}
              </FormItem>
            </Col>
          })}
        </Row>
        <Row>
          <Col span={12} offset={12} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" onClick={::this.handleSubmit}>搜索</Button>
            <Button onClick={::this.handleReset}>清除条件</Button>
          </Col>
        </Row>
      </Form>
      )
  }
}
