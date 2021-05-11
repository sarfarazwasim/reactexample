import React from "react";
import ChildComponent from "./ChildComponent";

export default class ErrorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorLog: null
    };
  }
  componentDidCatch(error, info) {
    console.log("caught inside Error Component", error, info);
    this.setState({
      error: error,
      errorLog: info
    });
  }
  render() {
    if (this.state.errorLog) {
      return <div>Opsss you have encountered an error</div>;
    }
    return this.props.children;
  }
}
