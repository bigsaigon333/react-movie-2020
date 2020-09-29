import React from "react";

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	componentDidMount() {
		this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		return (
			<div>
				<h1>Current Time</h1>
				<p>{this.state.date.toLocaleString()}</p>
			</div>
		);
	}
}

export default Clock;
