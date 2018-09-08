import React, {Component} from 'react';

const API = 'AIzaSyASYV9DD_567AMhDSzsbdyTJh2sP-fDZt8'

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

class Youtube extends Component {

	state = {
		videosList: [],
		loading: false,
		url:'https://www.googleapis.com/youtube/v3/search?',
		results: 5,
		query:''	
	};

	constructor(props){
		super(props);
		this.getVideos = this.getVideos.bind(this);
	}

	getVideos(){
		//this.setState({loading:true});
		const query = this.refs.query.value;
		const results = this.refs.results.value;
		const url = this.state.url+'key='+API+'&q='+query+'&part=snippet&maxResults='+results;
		fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
        	console.log(responseJson);
        	const videosList = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
	        this.setState({videosList, query, results, url});
	        console.log(this.state);
    	})
		.catch((error) => {
			console.error(error);
		});
	}

	render(){
	    console.log(this.state.url);
	    return(
	    	<div>
	    	<label> 
        <input id="query" type="text" placeholder="Buscar" className="form-control" ref='query' />
        <input id="results" type="number" placeholder="Cantidad de videos" className="form-control" ref='results' />
        <button id="search-button" onClick={this.getVideos} className="btn btn-info">
        Buscar</button>
        </label>
	    	{
	    		this.state.videosList.map((link, i) => {
	    			console.log(link);
	    			var frame = <div 
	    							key={i} 
	    							className={i}>
	    								<iframe width="560" height="315" src={link} frameBorder="0" title={link} allowFullScreen>
	    								</iframe>
	    						</div>
	    			return frame;
	    		})
	    	}
	    	{this.frame}
	    	</div>
	    );
	}
}

export default Youtube;