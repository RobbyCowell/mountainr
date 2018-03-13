export function initializeData (data) {
    return {
        type: 'INITIALIZE_DATA',
        payload: data
    }
}

export function searchResorts (searchTerm) {
    return {
        type: 'SEARCH_RESORTS',
        payload: searchTerm
    }
}

export function addResort (resort) {
    return {
        type: 'ADD_RESORT',
        payload: resort
    }
}

export function editResort (resort) {
    return {
        type: 'EDIT_RESORT',
        payload: resort
    }
}

export function deleteResort (resort) {
    return {
        type: 'DELETE_RESORT',
        payload: resort
    }
}