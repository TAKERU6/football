import React, { Component } from "react";
import { connect } from "react-redux";
import { addProfile } from "../actions";

class Form extends Component {
  state = { name: "", age: 0, position: "whichPosition", gender: "men" };

  handleChnageName = (event) => this.setState({ name: event.target.value });

  handleChangePosition = (event) =>
    this.setState({ position: event.target.value });

  handleChangeAge = (event) => this.setState({ age: event.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const name = this.state.name;
    const position = this.state.position;
    const age = this.state.age;
    const gender = this.state.gender;
    onSubmit(name, position, age, gender);
    this.setState({
      name: "",
      age: 0,
      position: "whichPosition",
      gender: "men"
    });
  };

  onClickMen = () => this.setState({ gender: "men" });

  onClickWomen = () => this.setState({ gender: "women" });

  render() {
    console.log(this.state.position);

    const isMen = this.state.gender === "men";
    const isWomen = this.state.gender === "women";
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="radio"
            id="men"
            onChange={() => this.onClickMen()}
            checked={isMen}
          />
          <label htmlFor="men">Men</label>
          <input
            type="radio"
            id="women"
            onChange={() => this.onClickWomen()}
            checked={isWomen}
          />
          <label htmlFor="women">Women</label>
          <br />
          Name:{" "}
          <input
            type="text"
            name="name"
            placeholder="your name"
            value={this.state.name}
            onChange={this.handleChnageName}
            required
          />
          <br />
          Age:{" "}
          <input
            type="number"
            placeholder="your age"
            value={this.state.age}
            onChange={this.handleChangeAge}
          />
          <br />
          <select
            name="position"
            id="position"
            value={this.state.position}
            onChange={this.handleChangePosition}
          >
            <option value="whichPosition">--position--</option>
            <option value="GK">GK</option>
            <option value="DF">DF</option>
            <option value="MF">MF</option>
            <option value="FW">FW</option>
          </select>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ forms: state.forms });

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (name, position, age, gender, message) =>
      dispatch(addProfile(name, position, age, gender, message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
