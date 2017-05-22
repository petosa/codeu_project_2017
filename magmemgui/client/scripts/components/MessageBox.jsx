import React from 'react';

import AddConversation from './AddConversation.jsx'
import ConversationList from './ConversationList.jsx'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';
import {Form, FormGroup, FormControl} from 'react-bootstrap';



class MessageBox extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

  	var buttonStyle = {
      "fontFamily": "Space Mono",
      "float": "right",
      "paddingRight": "2%",
    }

	


	return (
		<div>
		<ListGroup>
			<ListGroupItem>Message</ListGroupItem>
		    <FormGroup>
		    	<FormControl componentClass="textarea" placeholder="textarea" />
		    </FormGroup>
         <div style={buttonStyle}>
                <Button bsStyle="info" onClick={this.toggleVisibility}>
                Submit
                </Button>
         </div>
		</ListGroup>
         </div>

		)
	}

}

export default MessageBox;