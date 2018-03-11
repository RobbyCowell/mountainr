import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./ResortCard.css";

class ResortCard extends Component {
    render() {
        return (
            <div className="resort-card">
                <div className="resort-card__info">
                    <h3>{this.props.data.NAME}</h3>
                    {/* <p>{this.props.usState}</p> */}
                    <div className="resort-card__stats">
                        <span>{this.props.data.LIFTS} lifts</span>
                        <span>{this.props.data.TRAILS} trails</span>
                        <span>{this.props.data.ACRES} acres</span>
                        <span>Terrain park?{this.props.data.TERRAIN_PARK}</span>
                    </div>
                    <p className="resort-card__action">Explore</p>
                </div>
                <div className="resort-card__logo-container text-center">
                    <img className="resort-card__logo"src={this.props.data.LOGO_URL}/>
                </div>
            </div>
        )
    }
}

export default connect()(ResortCard);