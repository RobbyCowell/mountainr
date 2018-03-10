import Store from '../Store';
import { initializeData } from '../actions/resortsActions';
import history from '../history.js';

const papaConfig = {
	delimiter: "",	// auto-detect
	newline: "",	// auto-detect
	quoteChar: '"',
	header: true,
	dynamicTyping: false,
	preview: 0,
	encoding: "",
	worker: false,
	comments: false,
	step: undefined,
	complete: function(results, file) {
		Store.dispatch(initializeData(results.data));
		history.push('/listing');
    },
	error: undefined,
	download: false,
	skipEmptyLines: false,
	chunk: undefined,
	fastMode: undefined,
	beforeFirstChunk: undefined,
	withCredentials: undefined
}

export default papaConfig;
