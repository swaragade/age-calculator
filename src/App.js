import React from "react";
import DateField from "./DateField";
import ResultBar from "./ResultBar";

class App extends React.Component {
  state = { dob: null };
  dobCallback = (value) => {
    this.setState({ dob: value });
  };

  render() {
    return (
      <div className="ui segment grid center aligned" style={{ boxShadow: null, border : '0px' }}>
        <DateField dobCallback={this.dobCallback} />
        {this.state.dob ? <div className="ui seven wide horizontal divider center aligned">Result</div> : null}
        <ResultBar dob={this.state.dob} />
      </div>
    );
  }
}

export default App;
