const INITIAL_STATE = {
    champs: [],
    isLoading: false,
    error: false,
}

const champsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'gettingChamps':
            return {...state, isLoading: true}
        case 'getChamps':
            return {...state, isLoading: false, champs: action.payload, error: false}
        case 'errorChamps':
            return {...state, isLoading: false, champs: [], error: action.paylaod}
        default:
            return state;
    }
}

export default champsReducer;