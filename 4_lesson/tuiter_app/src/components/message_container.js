
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { tweetAdd, tweetList } from '../actions/index'
import MessageBox from '../components/message_box';
import MessageList from '../components/message_list';


class MessageContainer extends Component {

    state = {
        messageText: ''
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleClick = e => {
        e.preventDefault();
        this.props.tweetAdd(this.state.messageText);
        this.props.tweetList();
    }

    componentWillMount(){
        this.props.tweetList();
    }

    render(){
        return (
            <div>
               <MessageBox
                    placeholder="What do you are thinking?"
                    name="messageText"
                    messageText={this.state.messageText}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                />
               <MessageList tweets={this.props.tweets} />
            </div>
        );
    }

}

function mapStateToProps(state) {
  return {
    tweets: state.message.tweetList
  }
}

export default connect(mapStateToProps, { tweetList, tweetAdd })(MessageContainer);
