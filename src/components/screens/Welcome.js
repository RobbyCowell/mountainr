import React, { Component } from 'react';
import PapaParse from 'papaparse';
import papaConfig from '../../config/papaparse';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Welcome.css';

class Welcome extends Component {
    handleUpload(evt) {
        let value = evt.target.files[0];
        PapaParse.parse(value, papaConfig);
    }

    render() {
        return (
            <div className="container-fluid welcome__background">
                <h1 className="welcome__title text-center">Mountainr</h1>
                <div className="row">
                    <div className="col text-center">
                        <label htmlFor="csv-file" className="welcome__uploader__button">Upload CSV</label>
                        <input type="file" className="welcome__uploader" id="csv-file" accept=".csv" name="csv-file" onChange={this.handleUpload.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;