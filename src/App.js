import React, { Component } from 'react';
import './App.css';
import BookmarkForm from './components/BookmarkForm/BookmarkForm';
import WebsiteChoice from './components/WebsiteChoice/WebsiteChoice';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			websites: []
		};
	}
	render() {
		let websites = this.state.websites;
		websites = websites.map((website, index) => {
			// prettier-ignore
			return (
				<WebsiteChoice website={website} key={index} onDelete={this.onDelete} onEdit={this.onEdit}>{website}</WebsiteChoice>
			);
		});
		return (
			<div className="App">
				<h1>Bookmarks</h1>
				<BookmarkForm onAdd={this.onAdd} />
				<ul>{websites}</ul>
			</div>
		);
	}
	onAdd = (newWebsite) => {
		let updatedWebsiteList = this.state.websites;
		updatedWebsiteList.push(newWebsite);
		this.setState({
			characters: updatedWebsiteList
		});
	};
	onDelete = (currentWebsite) => {
		let updatedWebsiteList = this.state.websites.filter((website) => {
			return currentWebsite !== website;
		});
		this.setState({
			websites: updatedWebsiteList
		});
	};
	onEdit = (currentWebsite, editedWebsite) => {
		let updatedWebsiteList = this.state.websites.map((website) => {
			let choice = currentWebsite === website ? editedWebsite : website;
			return choice;
		});
		this.setState({
			websites: updatedWebsiteList
		});
	};
}

export default App;
