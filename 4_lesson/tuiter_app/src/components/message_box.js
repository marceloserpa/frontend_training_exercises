
import React, { Component } from 'react';


class MessageBox extends Component {

    render(){
        return (
            <div className="form-group message-box">
                <textarea className="form-control message-box-textarea" 
                    rows="3"
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    defaultValue={this.props.messageText}
                    onChange={this.props.handleChange}>
                </textarea>

                <input type="submit" 
                    value="Post message"
                    className="btn btn-primary"
                    onClick={this.props.handleClick}/>
            </div>
        );        
    }
};

export default MessageBox;
