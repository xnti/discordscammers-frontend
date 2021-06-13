import React, { Component } from 'react'
import { connect } from "react-redux"
import {
    CLOSE_REPORT_FORM,
    REPORT_SENT_API,
} from '../redux/actions'


class ReportForm extends Component {
    SENT_API = () => {
        var Report_DiscordID = document.getElementById("Report_DiscordID").value;
        var Report_DiscordUsername = document.getElementById("Report_DiscordUsername").value;
        var Report_Info = document.getElementById("Report_Info").value;
        this.props.REPORT_SENT_API(Report_DiscordID, Report_DiscordUsername, Report_Info);
    }

    render() {
        const { isReportSent } = this.props;
        return (
            <div>
                <p className="text-start lead" onClick={() => this.props.CLOSE_REPORT_FORM()} style={{ cursor: 'pointer' }}><i className="fas fa-arrow-left"></i> Return</p>
                {!isReportSent &&
                    <div>
                        <p className="display-6">Report Form</p>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Discord ID:</span>
                            <input id="Report_DiscordID" type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Discord Username:</span>
                            <input id="Report_DiscordUsername" type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" />
                        </div>
                        <div className="form-floating mb-3">
                            <textarea id="Report_Info" style={{ minHeight: '15rem' }} type="text" className="form-control" placeholder="" aria-describedby="basic-addon1" />
                            <label for="Report_Info">Additional Information</label>
                        </div>
                        <button className="btn btn-lg btn-danger" onClick={() => this.SENT_API()}><i className="fas fa-flag"></i> REPORT!</button>
                        <p className="m-0 mt-4 text-muted">Thank you for helping us.</p>
                    </div>
                }
                {isReportSent &&
                    <>
                        <div className="alert alert-success" role="alert">
                            <h4 className="alert-heading">Well done!</h4>
                            <p>You successfully reported scammer. Thanks to you, we will be able to expose one more fraudulent person. </p>
                            <hr />
                            <p className="mb-0 text-center">❤️</p>
                        </div>
                    </>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //Konular: state.Konular,
        isReportFormOpened: state.isReportFormOpened,
        isSearched: state.isSearched,
        isReportSent: state.isReportSent,
        //Bildirimler: state.Bildirimler,
        //SayfaDegistirici: state.SayfaDegistirici,
    }
}

export default connect(mapStateToProps,
    {
        CLOSE_REPORT_FORM,
        REPORT_SENT_API,
    })(ReportForm);
