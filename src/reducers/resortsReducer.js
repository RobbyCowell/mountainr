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
            const updatedResorts = state.resorts.map(resort => {
                if (resort.name === action.payload.name) {
                    return {...resort, ...action.payload}
                }
                return resort;
            });

            return { ...state, resorts: updatedResorts };
        }

        default : {
            return;
        }
    }
}

export default resortsReducer;