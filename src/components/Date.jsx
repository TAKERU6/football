import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles.css";

class Date extends Component {
  render() {
    const { form } = this.props;
    const position = form.position;
    const isGK = position === "GK";
    const isDF = position === "DF";
    const isMF = position === "MF";
    const isFW = position === "FW";
    const gender = form.gender;
    const isMen = gender === "men";
    const isWomen = gender === "women";
    const age = form.age;
    const isKids = age < 12;
    const isYoung = 12 <= age && age < 18;
    const isAdult = 18 < age;
    return (
      <div className="message">
        Your training is
        {isGK && isMen && isKids && (
          <div className="result"> Catch Training</div>
        )}
        {isGK && isMen && isYoung && (
          <div className="result"> Jump Training</div>
        )}
        {isGK && isMen && isAdult && (
          <div className="result"> Agirity Training</div>
        )}
        {isGK && isWomen && isKids && (
          <div className="result"> Reaction Training</div>
        )}
        {isGK && isWomen && isYoung && (
          <div className="result"> Saving Training</div>
        )}
        {isGK && isWomen && isAdult && (
          <div className="result"> Power Training</div>
        )}
        {isDF && isMen && isKids && (
          <div className="result">One on One Training</div>
        )}
        {isDF && isMen && isYoung && (
          <div className="result">Cordination Training</div>
        )}
        {isDF && isMen && isAdult && (
          <div className="result">Speed Training</div>
        )}
        {isDF && isWomen && isKids && (
          <div className="result">2 on 2 Training</div>
        )}
        {isDF && isWomen && isYoung && (
          <div className="result">short sprint Training</div>
        )}
        {isDF && isWomen && isAdult && (
          <div className="result">Heading Training</div>
        )}
        {isMF && isMen && isKids && (
          <div className="result">Short Pass Training</div>
        )}
        {isMF && isMen && isYoung && (
          <div className="result">Long Pass Training</div>
        )}
        {isMF && isMen && isAdult && (
          <div className="result">Phisical Training</div>
        )}
        {isMF && isWomen && isKids && (
          <div className="result">Short Pass Training</div>
        )}
        {isMF && isWomen && isYoung && (
          <div className="result">Game Training</div>
        )}
        {isMF && isWomen && isAdult && (
          <div className="result">4 on 4 Pass Training</div>
        )}
        {isFW && isMen && isKids && (
          <div className="result">Sprint Training</div>
        )}
        {isFW && isMen && isYoung && (
          <div className="result">Shoot Training</div>
        )}
        {isFW && isMen && isAdult && (
          <div className="result">Asirity Training</div>
        )}
        {isFW && isWomen && isKids && (
          <div className="result">Cordinaion Training</div>
        )}
        {isFW && isWomen && isYoung && (
          <div className="result">one on one Training</div>
        )}
        {isFW && isWomen && isAdult && (
          <div className="result">Sprint Training</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ forms: state.forms });

export default connect(mapStateToProps)(Date);
