import React, { Component } from 'react';
import PapaParse from 'papaparse';
import papaConfig from '../../config/papaparse';

class Welcome extends Component {
    handleUpload(evt) {
        let value = evt.target.files[0];
        PapaParse.parse(value, papaConfig);
    }

    render() {
        return (
            <div>
                <h1>Mountainr</h1>
                <input type="file" id="csv-file" accept=".csv" name="file" onChange={this.handleUpload.bind(this)}/>
            </div>
        )
    }
}

export default Welcome;