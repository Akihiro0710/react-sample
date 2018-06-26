import {render} from 'react-dom';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hello React!"
    }
  }

  onChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <input type="text" value={this.state.value} onChange={this.onChange.bind(this)}/>
      </div>
    );
  }
}

module.exports = App;

render(<App/>, document.getElementById('app'));