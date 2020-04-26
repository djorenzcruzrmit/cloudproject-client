import React, {Component} from "react";
import {connect} from "react-redux";
import {signIn} from "../../store/actions/authActions";
import {Redirect} from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const {auth} = this.props;
    if (auth.uid) return <Redirect to="/dashboard" />;
    return (
      <div className="LogoLogin">
        <div className="container">
          <form
            onSubmit={this.handleSubmit}
            className="white container"
            style={{padding: 50, opacity: 0.96}}
          >
            <h1 className="grey-text text-darken-3">Login</h1>
            <h6>Please enter your valid email and password below:</h6>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-field" style={{paddingBottom: 50}}>
              <button className="btn grey darken-2 z-depth-0">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
