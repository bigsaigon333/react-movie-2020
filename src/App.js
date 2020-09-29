import React from "react";

import axios from "axios";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			movies: [],
		};
	}

	async getMovies() {
		const result = await axios.get("http://yts-proxy.now.sh/list_movies.json");
		console.log(result);

		return result;
	}

	async componentDidMount() {
		this.getMovies();
	}

	render() {
		return <div>{this.state.isLoading ? "Loading..." : "We are ready"}</div>;
	}
}

export default App;
