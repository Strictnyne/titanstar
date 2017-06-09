import React, {Component} from "react";
import ReactDOM from "react-dom";

import PointsSpent from './points-spent.jsx';

const _self = this;

class Talents extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			points: '0',
			pointsMax: '6'
		}
	}
	componentDidMount = () => {
		this.handlePointsClicks();
		this.handlePointsMaxed();

	}

	componentDidUpdate = () => {
		console.log("update");
		this.handlePointsClicks();
		// return false;
	}

	handlePointsMaxed = () => {
		let current = this.state.points;
		let max = this.state.pointsMax;

		if(current >= max) {
			console.log("You cannot have more than 6 points");
			var _this = $("#list li div").not("--active");
			_this.each(function(i) {
				console.log(i);
			});
			document.getElementById('id').style.pointerEvents = 'none';
		}

		console.log('Maxed: ' + current);
	}

	handlePointsClicks = () => {
		var talents_points = '';
		var _this = this;

		$(document).ready(function() {
			$('#talents li ').on('click',  'div', function(event) {
				event.stopPropagation();

				$(event.target).addClass('--active');
				talents_points = $('.--active').length;
				_this.setState({ points: talents_points });
			});

			$('.no-right-click').bind('contextmenu', function(event) {
				event.stopPropagation();

				$(event.target).removeClass('--active');
				talents_points = $('.--active').length;
				_this.setState({ points: talents_points });
				// this.handlePointsMaxed(talents_points);

				return false;
			});
		});
	}

    render() {
    	const styles = {
    		tableRow: {
    			display: 'table-row'
			},
			leftColumn: {
				width: 140
			},
			centerColumn: {
				display: 'table-cell',
				width: 600
			},
			rightColumn: {
				display: 'table-cell',
				width: 222
			}
		}

        return (
			<div className="flex talent-calc-container__content clearfix">
				<div className="full">
					<div style={styles.tableRow}>
						<div className="talent-path" style={styles.leftColumn}>
							<div className="talent-path__1">Talent Path 1</div>
							<div className="talent-path__2">Talent Path 2</div>
						</div>

						<div className="no-right-click" style={styles.centerColumn}>
							<ul id="talents">
								<li onLoad={this.handlePointsClicks}>
									<div id="talent-stacks" className="talent-image__stacks"></div>
								</li>
								<li>
									<div id="talent-food" className="talent-image__food"></div>
								</li>
								<li>
									<div id="talent-cake" className="talent-image__cake"></div>
								</li>
								<li>
									<div id="talent-crown" className="talent-image__crown"></div>
								</li>
								<li>
									<div id="talent-boat" className="talent-image__boat"></div>
								</li>
								<li>
									<div id="talent-scuba-gear" className="talent-image__scuba-gear"></div>
								</li>
								<li>
									<div id="talent-lightning" className="talent-image__lightning"></div>
								</li>
								<li>
									<div id="talent-skull" className="talent-image__skull"></div>
								</li>
							</ul>
						</div>

						<div style={styles.rightColumn}>
							<PointsSpent points={this.state.points} pointsMax={this.state.pointsMax} />
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default Talents;