import React from "react";
import './cheese-list.css';
// import { fetchCheeses } from '../actions/cheese';

// export default class CheeseList extends React.Component {
export default function CheeseList() {

	// componentDidMount() {
	// 	this.props.dispatch(fetchCheeses());
	// }

	// render() {
	// const allCheeses = this.props.cheeses.map((cheese, index) =>
	// 	<li key={index} className="cheese-list-cheese">
	// 		{cheese}
	// 	</li>
	// );

	return (

		<ul className="cheese-ul">
			<li className="cheese-li">Shropshire Blue</li>
			<li className="cheese-li">Yorkshire Blue</li>
			<li className="cheese-li">Bath Blue</li>
		</ul>


	);

}







// const cheeses = [
// 	"Bath Blue",
// 	"Barkham Blue",
// 	"Buxton Blue",
// 	"Cheshire Blue",
// 	"Devon Blue",
// 	"Dorset Blue Vinney",
// 	"Dovedale",
// 	"Exmoor Blue",
// 	"Harbourne Blue",
// 	"Lanark Blue",
// 	"Lymeswold",
// 	"Oxford Blue",
// 	"Shropshire Blue",
// 	"Stichelton",
// 	"Stilton",
// 	"Blue Wensleydale",
// 	"Yorkshire Blue"
// ]
