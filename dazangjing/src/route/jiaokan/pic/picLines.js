import { Button } from 'antd'

import PicLine from './picLine'

export default class PicLines extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const lines = [{
      status: 0, // 四种状态
      width: 50, // 总长800
    },{
      status: 0, // 四种状态
      width: 40, // 总长800
    },{
      status: 0, // 四种状态
      width: 28, // 总长800
    },{
      status: 0, // 四种状态
      width: 30, // 总长800
    },{
      status: 0, // 四种状态
      width: 35, // 总长800
    },{
      status: 0, // 四种状态
      width: 35, // 总长800
    },{
      status: 0, // 四种状态
      width: 32, // 总长800
    },{
      status: 0, // 四种状态
      width: 30, // 总长800
    },{
      status: 0, // 四种状态
      width: 32, // 总长800
    },{
      status: 0, // 四种状态
      width: 31, // 总长800
    },{
      status: 0, // 四种状态
      width: 31, // 总长800
    },{
      status: 0, // 四种状态
      width: 31, // 总长800
    },{
      status: 0, // 四种状态
      width: 31, // 总长800
    },{
      status: 0, // 四种状态
      width: 34, // 总长800
    },{
      status: 0, // 四种状态
      width: 35, // 总长800
    },{
      status: 0, // 四种状态
      width: 31, // 总长800
    },{
      status: 0, // 四种状态
      width: 31, // 总长800
    },{
      status: 0, // 四种状态
      width: 31, // 总长800
    },{
      status: 0, // 四种状态
      width: 31, // 总长800
    },{
      status: 0, // 四种状态
      width: 31, // 总长800
    },{
      status: 0, // 四种状态
      width: 31, // 总长800
    },{
      status: 0, // 四种状态
      width: 31, // 总长800
    },{
      status: 0, // 四种状态
      width: 30, // 总长800
    },{
      status: 0, // 四种状态
      width: 16, // 总长800
    },{
      status: 0, // 四种状态
      width: 31, // 总长800
    }]
    return(
      <div className="pic-lines">
        {
          _.map(lines, (value, key)=> {
            return <PicLine value={{...value, key}} key={key} />
          })
        }
      </div>
      )
  }
}