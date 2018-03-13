import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editResort } from '../../actions/resortsActions';
import back from '../../images/Back.png';
import './Listing.css';
import './Add.css';

class EditResort extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.goBack = this.goBack.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.state = this.props.resorts.find(resort => resort.name === this.props.match.params.id);
    }

    goBack() {
        this.props.history.goBack();
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    
    submitForm(event) {
        this.props.dispatch(editResort(this.state));
        event.preventDefault();
        this.props.history.goBack();
    }
    
    render() {
        return (
            <div className="container">
                <div className="row listing__header">
                    <div className="col-sm-2">
                        <img className="back-button" src={back} alt="back" onClick={this.goBack} />
                    </div>
                    <div className="col-sm-8">
                        <h2 className="listing__title">Edit resort</h2>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col col-sm-6">
                        <form onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label htmlFor="name">Resort name</label>
                                <input
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    id="name"
                                    className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Resort URL</label>
                                <input
                                    value={this.state.url}
                                    onChange={this.handleChange}
                                    id="url"
                                    className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Trail Map URL</label>
                                <input
                                    value={this.state.trailMapUrl}
                                    onChange={this.handleChange}
                                    id="trailMapUrl"
                                    className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Logo URL</label>
                                <input
                                    value={this.state.logoUrl}
                                    onChange={this.handleChange}
                                    id="logoUrl"
                                    className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Resort Address</label>
                                <input
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                    id="address"
                                    className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Resort Phone no.</label>
                                <input
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    id="phone"
                                    className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Resort hours</label>
                                <input
                                    value={this.state.hours}
                                    onChange={this.handleChange}
                                    id="hours"
                                    className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Resort lifts</label>
                                <input
                                    value={this.state.lifts}
                                    onChange={this.handleChange}
                                    id="lifts"
                                    className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Resort trials</label>
                                <input
                                    value={this.state.trails}
                                    onChange={this.handleChange}
                                    id="trails"
                                    className="form-control" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Resort acres</label>
                                <input
                                    value={this.state.acres}
                                    onChange={this.handleChange}
                                    id="acres"
                                    className="form-control" />
                            </div>

                            <input className="add__button" type="submit" value="Edit resort" />
                        </form>
                    </div>
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

export default connect(mapStateToProps)(EditResort);