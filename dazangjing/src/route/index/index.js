export default class Index extends React.Component {
  render() {
    return(
      <div>
        {/*<Dashboard {...this.props}/>*/}
        {this.props.children}
      </div>
      )
  }
}