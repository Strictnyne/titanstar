import React, {Component} from 'react';

import PointsSpent from './points-spent.jsx';

class Talents extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			points: 0,
			pointsMax: 6
		}
	}

	componentDidMount = () => {
		this.handlePointsClicks();

		$('#talent-stacks').attr('data-click', 'enabled');
		$('#talent-boat').attr('data-click', 'enabled');
	}

	componentDidUpdate = () => {
		this.handlePointsMaxed();
	}

	handlePointsMaxed = () => {
		let current = this.state.points;
		let max = this.state.pointsMax;

		if(current >= max) {
			$('#talents li div').not( '.--active').each(function() {
			}).each(function() {
				$(this).attr('data-click', 'disabled');
			});
		}
	}

	handlePointsClicks = () => {
		let max = this.state.pointsMax;
		var talents_points = $('.--active').length;
		var _this = this;

		$(document).ready(function() {
			$('#talents li ').on('click',  'div', function(event) {
				event.stopPropagation();
				event.preventDefault();
				var _next = $(event.target).parent().next('li').children().attr('id');

				if($(this).attr('data-click') === 'enabled') {
					$(event.target).addClass('--active');
					$(event.target).parent().prev('li').addClass('link__active');

					talents_points = $('.--active').length;
					_this.setState({points: talents_points});

					if(talents_points < max) {
						$('div#' + _next).attr('data-click', 'enabled');
					}
				}
			});

			$('.no-right-click').bind('contextmenu', function(event) {
				event.stopPropagation();
				var _next = $(event.target).parent().next('li').children().attr('id');

				if(talents_points == max) {
					$('#talents li div').each(function() {
						$(this).not('.--active').each(function () {
							var _prev = $(this).parent().prev('li').children().attr('id');

							$(this).each(function() {
								if($('div#' + _prev).hasClass('--active')) {
									if($(this).parent().prev('li').children().hasClass('--active')) {
										$(this).attr('data-click', 'enabled');
									}
								}
							});
						});
					});
				}

				if(!$('div#' + _next).hasClass('--active')) {
					$(event.target).removeClass('--active');
					$('div#' + _next).attr('data-click', 'disabled');
					$(event.target).parent().prev('li').removeClass('link__active');
				}
				else {
					if($('div#' + _next).attr('id') == "talent-boat") {
						$('div#talent-crown').removeClass('--active');
					}
				}

				talents_points = $('.--active').length;
				_this.setState({ points: talents_points });

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
								<li onLoad={this.handlePointsClicks} className="link">
									<div id="talent-stacks" className="talent-image__stacks" data-click="disabled"></div>
								</li>
								<li className="link">
									<div id="talent-food" className="talent-image__food" data-click="disabled"></div>
								</li>
								<li className="link">
									<div id="talent-cake" className="talent-image__cake" data-click="disabled"></div>
								</li>
								<li className="link">
									<div id="talent-crown" className="talent-image__crown" data-click="disabled"></div>
								</li>
								<li className="link">
									<div id="talent-boat" className="talent-image__boat" data-click="disabled"></div>
								</li>
								<li className="link">
									<div id="talent-scuba-gear" className="talent-image__scuba-gear" data-click="disabled"></div>
								</li>
								<li className="link">
									<div id="talent-lightning" className="talent-image__lightning" data-click="disabled"></div>
								</li>
								<li className="link">
									<div id="talent-skull" className="talent-image__skull" data-click="disabled"></div>
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