import React from "react";
import './cheese-list.css';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

class CheeseList extends React.Component {

	componentDidMount() {
		this.props.dispatch(fetchCheeses());
	}
	render() {
		const allCheeses = this.props.cheeses.map((cheese, index) =>
			<li key={index} className="cheese-list-cheese">
				{cheese}
			</li>
		);
		return (
			<ul className="cheese-ul" >
				<li>{allCheeses}</li>
			</ul>
		);
	}
}
const mapStateToProps = state => ({
	cheeses: state.cheeses
});
export default connect(mapStateToProps)(CheeseList);