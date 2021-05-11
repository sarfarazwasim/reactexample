import React from "react";

export default class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor from child");
    this.state = {
      data: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("from child getderived", props, state);
    // if (props.data === 3) {
    //   return {
    //     data: 10
    //   };
    // }
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get SnapshotBeforeUpdated", prevProps, prevState);
    return prevProps.data;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("calling from did update", prevProps, prevState, snapshot);
  }
  componentDidMount() {
    console.log("component did mount called");
  }

  componentWillUnmount() {
    //window.removeEventListener('resize', this.resizeListener)
    console.log("unmounted......");
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("inside should component Update", nextProps, nextState);
  //   if (nextProps.data === 3) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    console.log("rendering from child");
    if (this.props.data === 3) {
      throw new Error("ops");
    }
    return (
      <div>
        <h1> I am a Child Component</h1>
        <h4> Props from Parent :{this.props.data}</h4>
        <h4> State from Child :{this.state.data}</h4>
        <button
          onClick={() => {
            this.setState({
              data: this.state.data + 1
            });
          }}
        >
          INCREMENT CHILD STATE
        </button>
      </div>
    );
  }
}
