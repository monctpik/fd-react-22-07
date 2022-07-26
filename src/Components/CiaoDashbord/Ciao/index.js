import { Component } from "react";

class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHi: true
    };
  }
  handlerSwitch = ()=>{
    this.setState({isHi: !this.state.isHi})
  }
  render() {
    const { id, fname, sname} = this.props;
    const { isHi } = this.state;
    if(isHi===false){
      return <h3>Bye, {fname} {sname}! (id:{id})</h3>
    }
    return (
      <>
        <h2>Hi, {fname} {sname}! (id:{id})</h2>
        <button onClick={this.handlerSwitch}>switch isHi</button>
      </>
    );
  }
}
export default Ciao;