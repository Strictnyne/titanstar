import React, {Component} from "react";

class PointsSpent extends React.Component {


    render() {
        return (
			<div id="talent-points-spent">
				<div>
					<span>
						{this.props.points} / {this.props.pointsMax}
					</span>
					Points Spent
				</div>
			</div>
        );
    }
}

export default PointsSpent;