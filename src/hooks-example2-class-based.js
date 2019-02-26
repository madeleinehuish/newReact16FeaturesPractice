import React from 'react';
import { ThemeContext2 } from './theme-context';

export default class HooksExampleClassBased extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: 'Madeleine',
			lastName: 'Huish',
			width: window.innerWidth
		}
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
		document.title = this.state.firstName + ' ' + this.state.lastName;
		window.addEventListener('resize', this.handleResize);
	}

	componentDidUpdate() {
		document.title = this.state.firstName + ' ' + this.state.lastName
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize() {
		this.setState({ width: window.innerWidth })
	}

	handleFirstNameChange(e) {
		this.setState({ firstName: e.target.value});
	}

	handleLastNameChange(e) {
		this.setState({ lastName: e.target.value});
	}


	render() {
		return (
			<ThemeContext2.Consumer>
				{ (theme)=> (
						<section style={{ marginLeft: '50px'}}>
							<div label="first name">
								<input value={this.state.firstName} onChange={this.handleFirstNameChange} />
							</div>
							<div label="last name">
								<input value={this.state.lastName} onChange={this.handleLastNameChange} />
							</div>
							<div label="width" style={{ marginLeft: '50px'}}>
								Window width is : {this.state.width}
							</div>
							<span style={{ marginLeft: '20px'}}>
								current name is : {this.state.firstName}&nbsp;{this.state.lastName}
							</span>
							<div style={{
								backgroundColor: theme.background,
								width: theme.size,
								border: theme.border,
								margin: theme.margin
							}}>Check out my context color!</div>
						</section>
				)}
			</ThemeContext2.Consumer>
		)
	}

}
