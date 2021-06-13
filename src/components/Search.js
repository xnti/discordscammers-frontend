import React, { Component } from 'react'

import Header from "../components/Header.js";
import Footer from "../components/Footer"

import { connect } from "react-redux"
import {
    SEARCH_API_SET_RESPONSE,
} from '../redux/actions'


class Search extends Component {
    componentDidMount = () => {
        const { match: { params } } = this.props;
        this.props.SEARCH_API_SET_RESPONSE(params);
    }

    render() {
        const { SEARCH_isLoading, SEARCH_isFound, SEARCH_api_response } = this.props;
        if (SEARCH_api_response == null || SEARCH_api_response == undefined)
            return (
                <>
                    <Header />
                    <div className="container-fluid mb-3">
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="mx-auto mt-4 text-center">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <div className="d-flex flex-column min-vh-25 text-center text-danger m-auto">
                                                <div className="m-auto">
                                                    {!SEARCH_isFound &&
                                                        <>
                                                            <div className="spinner-border" role="status" style={{ width: "15rem", height: "15rem" }}>

                                                            </div>
                                                            <p className="display-4">Loading...</p>
                                                        </>
                                                    }
                                                    {SEARCH_isFound &&
                                                        <>
                                                            <p className="text-decoration-none text-start lead"><a href="/" className="text-decoration-none text-dark"><i className="fas fa-arrow-left"></i> Return</a></p>
                                                            <p className="display-6">This user is not in our database :(</p>
                                                            <p className="lead text-dark">However, this does not prove that the person you are looking for is not a scam.</p>
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )
        if (SEARCH_api_response !== null && SEARCH_api_response !== undefined)
            return (
                <>
                    <Header />
                    <div className="container-fluid mb-3">
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="mx-auto mt-4 text-center">
                                    <div className="card shadow">
                                        <div className="card-body">

                                            <div className="d-flex flex-column min-vh-25 text-center text-danger m-auto">
                                                <div className="m-auto">
                                                    {SEARCH_api_response.status !== "found" &&
                                                        <>
                                                            <p className="text-decoration-none text-start lead"><a href="/" className="text-decoration-none text-dark"><i className="fas fa-arrow-left"></i> Return</a></p>
                                                            <p className="display-6">This user is not in our database :(</p>
                                                            <p className="lead text-dark">However, this does not prove that the person you are looking for is not a scam.</p>
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                            {SEARCH_api_response.status == "found" &&
                                                <>
                                                    <p className="text-decoration-none text-start lead"><a href="/" className="text-decoration-none text-dark"><i className="fas fa-arrow-left"></i> Return</a></p>
                                                    <p className="display-6 text-danger">Results</p>
                                                    <div className="ScammerInfo">
                                                        <div className="w-100 mx-auto text-center">
                                                            <p className="fw-light">Scammer Discord ID:  {SEARCH_api_response.requested_id}</p>
                                                            <p className="fw-light">Fraud Score: <span className="text-danger">{SEARCH_api_response.fraud_score}</span></p>
                                                            <p className="fw-light">Report Count: <span className="text-danger">{SEARCH_api_response.report_count}</span></p>
                                                        </div>
                                                        <div className="list-group">
                                                            {SEARCH_api_response.scam_reports.map((s, i) => {
                                                                var too_long = false;
                                                                if (i > 24)
                                                                    too_long = true;
                                                                if (too_long)
                                                                    return null;
                                                                return (
                                                                    <>
                                                                        <span className="text-start">
                                                                            <a href={'#RECORD' + (i + 1)} id={"RECORD" + (i + 1)} className="list-group-item list-group-item-action" aria-current="true">
                                                                                <div className="d-flex w-100 justify-content-between">
                                                                                    <h5 className="mb-1">Record #{i + 1}</h5>
                                                                                    <small>{s.date}</small>
                                                                                </div>
                                                                                <p className="mb-1">{s.report}</p>
                                                                                <small className="text-muted">Scammer's reported username: {s.report_username}</small>
                                                                            </a>
                                                                        </span>
                                                                        {i === 24 &&
                                                                            <p className="lead mt-4 text-danger">Sorry, unfortunately we can only show latest 25 records.</p>
                                                                        }
                                                                    </>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )
    }
}
const mapStateToProps = (state) => {
    return {
        SEARCH_isLoading: state.SEARCH_isLoading,
        SEARCH_isFound: state.SEARCH_isFound,
        SEARCH_api_response: state.SEARCH_api_response,
    }
}

export default connect(mapStateToProps,
    {
        SEARCH_API_SET_RESPONSE,
    })(Search);