import React from 'react';
import ReactDOM from 'react-dom';



class Message extends Component {

  render(){
    return (
      <div className={this.props.messageSender}>
        <p><b>{this.props.messageSender}:  </b>{this.props.messageBody}</p>
      </div>
    );
  }
}
export default Message;

function messageInput(props) {
    render() {
        return (
                <div>

                </div>
        );
    }
    // return(
    //        <div><h1>sample conversaation</h1></div>
    //        )
}

export default messageInput;


// function messageInput(props) {
//     return (
//             <div className="messageInput">
//                 <div className="message-text">
//                 {props.text}
//                 </div>
//                 <div className="message-time">
//                 {formateDate(props.date)}
//                 </div>
//             </div>
//             );
// }
