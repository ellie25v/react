import React, { Component } from "react";

const withToggle = props => Card => {
  return class PassProps extends Component {
    state = {
      toggle: false
    };

    onHandle = () => {
      this.setState(prevState => ({
        toggle: !prevState.toggle
      }));
    };
    render() {
      return (
        <div>
          <button onClick={this.onHandle}>
            {this.state.toggle ? "Hide" : "Show"}
          </button>
          {this.state.toggle && <Card {...this.props.newData} {...props} />}
        </div>
      );
    }
  };
};
export default withToggle;
