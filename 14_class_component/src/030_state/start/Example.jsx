import { Component } from "react";

class SwitchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn: true,
      label: "On"
    }
  }

  changeSwitch() {
    console.log(this)
    this.setState(prevState => {
      return {
        switchOn: !prevState.switchOn,
        label: !prevState.switchOn ? "On" : "Off"
      }
    })

  }

  render() {
    const { label } = this.state;
    return (
      <button onClick={this.changeSwitch.bind(this)}>{label}</button>
    )
  }
}
const Example = () => {
  return <><SwitchButton /></>;
};

export default Example;
