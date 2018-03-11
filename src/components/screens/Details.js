import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render() {

        let resortData = this.props.resorts.find(resort => resort.name === this.props.match.params.id);
        console.log(resortData);

        return (
            <div>
                <h1>{this.props.match.params.id}</h1>
            </div>
        )
    }
}

const mapStateToProps = store => { 
    return {
        resorts: store.resorts
    }
}

export default connect(mapStateToProps)(Details);

