import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import YTSearch             from 'youtube-api-search';
import SearchBar            from './components/search_bar';
import VideoList            from './components/video_list';
import VideoDetail          from './components/video_detail'
const API_KEY = 'AIzaSyBtllKx1RjR6x10kSzn47TOHBEKLDxokko';




// Create new component
// Produce HTML
class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos : [],
			selectedVideo: null
		}

		YTSearch({key: API_KEY, term: 'python'}, videoData => {
			console.log(videoData);
			this.setState({ 
				videos: videoData,
				selectedVideo: videoData[0]
				 });
		});
	}


	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video  = {this.state.selectedVideo} />
				<VideoList   
					onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
					videos = {this.state.videos} />
			</div>
		);
	}
} 



// take the components generated HTML and put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container')); 