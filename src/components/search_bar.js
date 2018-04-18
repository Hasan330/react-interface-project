import React, { Component } from 'react';


// Functional Component
// const SearchBar = ()  => {
// 	return <input />
// };


// Class Component
class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = { term : 'Placeholder text'};
	}

	render() {
		return (
			<div className="search-bar">
				<input 
				value = {this.state.term}
				onChange = {event => this.setState({term: event.target.value})} />
			</div>
		) 
	}
}

export default SearchBar;