import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {signUp} from "../../store/actions/authActions";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    fullName: "",
    userName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const {auth, authError} = this.props;
    if (auth.uid) return <Redirect to="/dashboard" />;
    return (
      <div className="LogoPopcorn">
        <div className="container">
          <form
            onSubmit={this.handleSubmit}
            className="white container"
            style={{padding: 50, opacity: 0.95}}
          >
            <h1 className="grey-text text-darken-3">Create an Account</h1>
            <h6 style={{paddingBottom: 20}}>
              Please fill in the form to create an account with us:
            </h6>
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
              <label htmlFor="password">
                Password (min length of 6 characters)
              </label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                id="userName"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input-field">
              <button className="btn grey darken-2 z-depth-0">
                Create Account
              </button>
              <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
