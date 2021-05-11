import React from "react";
import ChildComponent from "./ChildComponent";
import ErrorComponent from "./ErrorComponent";

export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor from parent");
    this.state = {
      data: 0,
      shouldRender: true
    };
  }
  render() {
    console.log("rendering from parent");
    return (
      <div>
        <h1> I am a Parent Component</h1>
        <h4> State from Parent :{this.state.data}</h4>
        <button
          onClick={() => {
            this.setState({
              data: this.state.data + 1
            });
          }}
        >
          INCREMENT PARENT STATE
        </button>
        {this.state.shouldRender && (
          <ErrorComponent>
            <ChildComponent data={this.state.data} />
          </ErrorComponent>
        )}
        <button
          onClick={() => {
            this.setState({ shouldRender: !this.state.shouldRender });
          }}
        >
          {" "}
          do some magic
        </button>
      </div>
    );
  }
}
