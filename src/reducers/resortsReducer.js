const resortsReducer = (state, action) => {
    switch(action.type) {
        case 'INITIALIZE_DATA': {
            return { ...state, resorts: action.payload }
        }

        case 'ADD_RESORT': {
            return {
                ...state,
                resorts: [...state.resorts, action.payload]
            }
        }

        case 'EDIT_RESORT': {
            return {
                ...state,
                resorts: [...state.resorts, action.payload]
            }
        }

        default : {
            return;
        }
    }
}

export default resortsReducer;