const INITIAL_STATE = {
    champions: [],
    isLoading: false,
    error: false,
}

const championsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'gettingChampions':
            return {...state, isLoading: true}
        case 'getChampions':
            return {...state, isLoading: false, champions: action.payload, error: false}
        case 'errorChampions':
            return {...state, isLoading: false, champions: [], error: action.paylaod}
        default:
            return state;
    }
}

export default championsReducer;