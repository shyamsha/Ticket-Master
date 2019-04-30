import React, { Component } from "react";
import axios from "axios";
import TicketTable from "./TickectTable";
import TicketForm from "./TicketForm";
//import { BrowserRouter,Link,Route} from 'react-router-dom'

class App extends Component {
	constructor() {
		super();
		this.state = {
			tickets: []
		};
	}
	componentDidMount() {
		axios
			.get("http://dct-api-data.herokuapp.com/tickets?api_key=aae4a1fa9e977d41")
			.then(response => {
				const tickets = response.data;
				this.setState(() => ({ tickets }));
			});
	}
	formHandle = ticket => {
		this.setState(prevState => ({
			tickets: prevState.tickets.concat(ticket)
		}));
	};
	render() {
		return (
			<div>
				<h2>Tickect Master</h2>
				<h3>Listing-Tickets-{this.state.tickets.length}</h3>
				<TicketTable tickets={this.state.tickets} />
				<TicketForm formHandle={this.formHandle} />
			</div>
		);
	}
}

export default App;
