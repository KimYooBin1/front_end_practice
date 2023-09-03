import { Component } from "react";
import type { ReactNode } from "react";
export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCountUp() {
    this.setState({
      count: 1,
    });
  }
  render(): ReactNode {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!!!</button>
      </>
    );
  }
}
