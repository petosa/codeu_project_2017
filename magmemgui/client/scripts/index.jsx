import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Welcome from './components/login.jsx'
import message from './components/messageinput.jsx'
import messageInput from './components/messageinput.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        stuff: "hello"

  }
 }
 render() {
    {this.stuff = this.state.stuff}
    // {prompt("What's your name?")}
    return (
        <div className="container-fluid">
        <div className= "row-fluid">
            <div className= "span2">
                <Welcome />

            </div>
    <div className="span10">
        <message/>
        <messageInput/>
    </div>
</div>
</div>
    )
 }
}

ReactDOM.render(<App />, document.getElementById('app'));

