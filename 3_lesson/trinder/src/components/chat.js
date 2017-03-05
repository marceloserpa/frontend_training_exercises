import React, { Component, PropTypes } from 'react';

class Chat extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  voltar(){
    this.context.router.push("/approved");
  }

  render(){
    return (
      <div>
        <h1>ID: {this.props.params.id}</h1>
        <button className="btn" onClick={this.voltar.bind(this)}>voltar</button>
      </div>
    );
  }

}

export default Chat;
