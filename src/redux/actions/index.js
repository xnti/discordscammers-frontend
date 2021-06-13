export const SEARCH_API_SET_RESPONSE = (params) => {
    return dispatch => {
        fetch("https://discordscammers.com/api/v1/search/" + params.id, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => response.json())
            .then((response_json) => {
                if (response_json.status === "found") {
                    dispatch({type: 'SEARCH_API_SET_RESPONSE_SUCCESS', payload: response_json})
                } else {
                    dispatch({type: 'SEARCH_API_SET_RESPONSE_FAILED', payload: response_json})
                }
            })
    }
}

export const REPORT_SENT_API = (ID, Username, Information) => {
    return dispatch => {
        var data = {
            ScammerID: ID,
            ScammerUsername: Username,
            AdditionalInfo: Information,
        }
        fetch("https://discordscammers.com/api/v1/report", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).then((response) => response.json())
            .then((response_json) => {
                if (response_json.status === "success") {
                    dispatch({ type: 'REPORT_SENT_SUCCESS', payload: true })
                } else {
                    alert("An error occured. " + JSON.stringify(response_json));
                    window.location.href = "https://discordscammers.com";
                }
            })
    }
}

export const OPEN_REPORT_FORM = (data) => {
    return {type: "OPEN_REPORT_FORM", payload: data};
}

export const CLOSE_REPORT_FORM = (data) => {
    return {type: "CLOSE_REPORT_FORM", payload: data};
}