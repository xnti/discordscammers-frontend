const INIT_STATE = {
    isReportFormOpened: false,
    isSearched: false,
    isReportSent: false,
    SEARCH_isLoading: true,
    SEARCH_isFound: false,
    SEARCH_api_response: null,
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'OPEN_REPORT_FORM':
            return {...state, isReportFormOpened: true};
        case 'CLOSE_REPORT_FORM':
            return {...state, isReportFormOpened: false, isReportSent: false};
        case 'REPORT_SENT_SUCCESS':
            return {...state, isReportSent: true};
        case 'SEARCH_API_SET_RESPONSE_SUCCESS':
            return{...state, SEARCH_api_response: action.payload, SEARCH_isFound: true, SEARCH_isLoading: false }
        case 'SEARCH_API_SET_RESPONSE_FAILED':
            return{...state, SEARCH_isFound: false, SEARCH_api_response: action.payload,}
        default:
            return state;
    }
}

export default reducer;