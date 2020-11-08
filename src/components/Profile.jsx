import React, { Component } from "react";
import { connect } from "react-redux";
import Date from "./Date";

class Profile extends Component {
  render() {
    const { forms } = this.props;
    return (
      <div>
        {Object.values(forms).map((form) => (
          <Date key={form.id} form={form} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ forms: state.forms });

export default connect(mapStateToProps)(Profile);
