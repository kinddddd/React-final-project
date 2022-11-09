const INITIAL_STATE = {
    images: [],
    isLoading: false,
    error: false,
}

const imagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'gettingImages':
            return {...state, isLoading: true}
        case 'getImages':
            return {...state, isLoading: false, images: action.payload, error: false}
        case 'errorImages':
            return {...state, isLoading: false, images: [], error: action.paylaod}
        default:
            return state;
    }
}

export default imagesReducer;