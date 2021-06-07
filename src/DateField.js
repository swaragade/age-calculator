import React from "react";

export default class DateField extends React.Component {
  state = { age: "" };

  onSubmitHandler = (value) => {
    this.setState({ age: value });
    this.props.dobCallback(value);
  };

  render() {
    return (
      <>
        <div className="ui segment row center aligned">
          <div className="olive seven wide column center aligned">
            <form className="ui form">
              <div className="field">
                <label>Birth Date</label>
                <input
                  type="date"
                  value={this.state.age}
                  onChange={(e) => this.onSubmitHandler(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
