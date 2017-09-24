import React, { Component } from "react";
import "./app.scss";

const ChannelsList = () => (
  <ul>
    <li>Channel 1</li>
    <li>Channel 2</li>
  </ul>
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Apollo</h2>
        </div>
        <ChannelsList />
      </div>
    );
  }
}
export default App;
