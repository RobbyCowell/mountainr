const resortsReducer = (state, action) => {
    switch(action.type) {
        case 'INITIALIZE_DATA': {
            return { ...state, resorts: action.payload }
        }

        default : {
            return;
        }
    }
}

export default resortsReducer;