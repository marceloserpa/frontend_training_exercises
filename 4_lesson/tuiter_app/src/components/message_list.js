
import React, { Component } from 'react';
import { connect } from 'react-redux';


class MessageList extends Component {

    render(){
        return (
            <ul className="list-group">
                { this.props.tweets.map(tweet => <li className="list-group-item">{tweet}</li>) }
            </ul>
        )
    }

}

export default MessageList;
