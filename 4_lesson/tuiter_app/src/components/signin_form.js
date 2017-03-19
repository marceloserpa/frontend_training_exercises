
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinLogin } from '../actions/index';

class SignInForm extends Component {

    state = {
        username: '',
        password: ''
    };

    static contextTypes = { 
        router: React.PropTypes.object
    }

    componentWillMount(){
        if(this.props.authenticated){
            this.context.router.push("/timeline");
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit(event){
        event.preventDefault();
        let user = {
            "username": this.state.username,
            "password": this.state.password
        }
        let authenticated = this.props.signinLogin(user);
        if(authenticated){
            this.context.router.push("/timeline");
        }
    }

    render(){        
        return (
            <div className="container">
                <form className="form-inline" onSubmit={this.onSubmit.bind(this)} >
                    <label className="sr-only">Username</label>
                    <input type="text" name="username" className="form-control mb-2 mr-sm-2 mb-sm-0" id="username" placeholder="Username ..." value={this.state.username} onChange={this.handleChange} />

                    <label className="sr-only">Password</label>
                    <input type="text" name="password" className="form-control mb-2 mr-sm-2 mb-sm-0" id="password" placeholder="Password ..." value={this.state.password} onChange={this.handleChange} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="col-xs-12">
                    { this.props.errorMessage &&
                        <div className="alert alert-danger" role="alert">
                            {this.props.errorMessage}
                        </div>
                    } 
                </div>
            </div>
        )
    };

}

function mapStateToProps(state) {
  return {
    errorMessage: state.authentication.errorMessage,
    authenticated: state.authentication.authenticated
  }
}

export default connect(mapStateToProps, { signinLogin })(SignInForm);