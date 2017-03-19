
import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignInForm from './signin_form';


class Home extends Component {

  render(){
    return (
      <div>        
        { !this.props.authenticated && <SignInForm />}                
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    authenticated: state.authentication.authenticated
  }
}

//export default Home;
export default connect(mapStateToProps, null)(Home);
