import React, {Component} from "react";

class PointsSpent extends React.Component {


    render() {
        return (
			<div id="talent-points-spent">
				<span>
					{this.props.points} / {this.props.pointsMax}
				</span>
				Points Spent
			</div>
        );
    }
}

export default PointsSpent;