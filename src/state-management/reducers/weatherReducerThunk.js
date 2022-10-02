import { AXIOS_START, AXIOS_FIELD, AXIOS_SUCCSES } from './../actions/actionType';

const initialState = {
    items: [],
    message: '',
    isLoading: true
}

const axiosReducerThunk = function (state = initialState, action) {
    switch (action.type) {
        case AXIOS_START:
            return { items: [], message: '', isLoading: true }
        case AXIOS_SUCCSES:
            return { items: [action.payload], message: '', isLoading: false }
        case AXIOS_FIELD:
            return { items: [], message: action.payload, isLoading: false }

        default:
            return state;
    }
}

export default axiosReducerThunk;
