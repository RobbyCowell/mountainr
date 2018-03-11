import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResortCard extends Component {
    render() {
        return (
            <div className="resort-card">
                <div classnme="row">
                    <div className="col">
                        <h3>{this.props.data.NAME}</h3>
                        {/* <p>{this.props.usState}</p> */}
                        <div className="resort-card__stats">
                            <span>{this.props.data.LIFTS} lifts</span>
                            <span>{this.props.data.TRAILS} trails</span>
                            <span>{this.props.data.ACRES} acres</span>
                            <span>Terrain park?{this.props.data.TERRAIN_PARK}</span>
                        </div>
                        <a href="#">Explore</a>
                    </div>
                    <div className="col">
                        {/* <img src={this.props.logoUrl}/> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(ResortCard);