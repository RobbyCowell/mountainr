import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResortCard from '../elements/ResortCard';

// @connect((store) => { return { resorts: store.resorts }; })
class Listing extends Component {
    render() {
        let resortList = [];

        for (var i = 0; i < this.props.resorts.length; i++) {
            resortList.push(
                <ResortCard
                    key={i}
                    history={this.props.history}
                    data={this.props.resorts[i]}
                />
            );
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Listing</h1>
                    </div>
                </div>
                <div className="row">
                    {resortList}
                </div>             
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
      resorts: store.resorts
    }
  }

export default connect(mapStateToProps)(Listing);
