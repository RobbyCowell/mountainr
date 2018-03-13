import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addResort } from '../../actions/resortsActions';

class AddResort extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {
        //     name: '',
        //     url: '',
        //     trailMapUrl: '',
        //     logoUrl: '',
        //     address: '',
        //     phone: '',
        //     hours: '',
        //     lifts: '',
        //     trails: '',
        //     acres: '',
        //     hasTerrainPark: false
        // }
    }

    goBack () {
        this.props.history.goBack();
    }

    handleChange (event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    
    submitForm (event) {
        this.props.dispatch(addResort(this.state));
        event.preventDefault();
    }
    
    render () {
        return (
            <div className="container">
                <form onSubmit={this.submitForm.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">Resort name</label>
                        <input
                            value={this.state.name}
                            onChange={this.handleChange}
                            id="name"
                            className="form-control"
                            placeholder="Resort name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Resort URL</label>
                        <input
                            value={this.state.url}
                            onChange={this.handleChange}
                            id="url"
                            className="form-control"
                            placeholder="Resort URL" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Trail Map URL</label>
                        <input
                            value={this.state.trailMapUrl}
                            onChange={this.handleChange}
                            id="trailMapUrl"
                            className="form-control"
                            placeholder="Trail Map URL" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Logo URL</label>
                        <input
                            value={this.state.logoUrl}
                            onChange={this.handleChange}
                            id="logoUrl"
                            className="form-control"
                            placeholder="Logo URL" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Resort Address</label>
                        <input
                            value={this.state.address}
                            onChange={this.handleChange}
                            id="address"
                            className="form-control"
                            placeholder="Resort address" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Resort Phone no.</label>
                        <input
                            value={this.state.phone}
                            onChange={this.handleChange}
                            id="phone"
                            className="form-control"
                            placeholder="Resort phone no." />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Resort hours</label>
                        <input
                            value={this.state.hours}
                            onChange={this.handleChange}
                            id="hours"
                            className="form-control"
                            placeholder="Resort hours" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Resort lifts</label>
                        <input
                            value={this.state.lifts}
                            onChange={this.handleChange}
                            id="lifts"
                            className="form-control"
                            placeholder="Resort lifts" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Resort trials</label>
                        <input
                            value={this.state.trails}
                            onChange={this.handleChange}
                            id="trails"
                            className="form-control"
                            placeholder="Resort trails" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Resort acres</label>
                        <input
                            value={this.state.acres}
                            onChange={this.handleChange}
                            id="acres"
                            className="form-control"
                            placeholder="Resort acres" />
                    </div>

                    <input type="submit" value="Add resort" />
                </form>

                <p onClick={this.goBack.bind(this)}>GO BACK</p>
            </div>
        )
    }
}

const mapStateToProps = store => { 
    return {
        resorts: store.resorts
    }
}

export default connect(mapStateToProps)(AddResort);