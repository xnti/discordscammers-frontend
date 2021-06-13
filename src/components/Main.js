import React, { Component } from 'react'
import { connect } from "react-redux"
import {
    OPEN_REPORT_FORM,
} from '../redux/actions'


import ReportForm from './ReportForm';

class Main extends Component {
    SEARCH_API = () => {
        var Search_DiscordID = document.getElementById("Search_DiscordID").value;
        window.location.href = "https://discordscammers.com/search/" + Search_DiscordID;
    }

    render() {
        const { isReportFormOpened,} = this.props;
        return (
            <div className="container-fluid mb-3">
                <div className="row justify-content-center">

                    <div className="col-lg-4">
                    {!isReportFormOpened &&
                        <div className="mx-auto mt-4 text-center">
                            <div className="card shadow">
                                <div className="card-body">
                                    <p className="display-6">Welcome to Discord Scammers.</p>
                                    <p className="lead">With your help we bury and expose fraudsters here.</p>
                                    <button className="btn btn-primary"><i className="fas fa-angle-double-right"></i> Learn more</button>
                                </div>
                            </div>
                        </div>
                    }
                        <div className="mx-auto mt-4 text-center">
                            <div className="card shadow">
                                <div className="card-body">
                                    {!isReportFormOpened &&
                                        <>
                                            <p className="lead">Search for more information about the user.</p>
                                            <div className="input-group w-100 input-group-lg">
                                                <input id="Search_DiscordID" type="text" className="form-control" placeholder="Type a Discord ID..." aria-label="Type a Discord ID..." aria-describedby="button-addon2" />
                                                <button className="btn btn-lg btn-primary" type="button" id="button-addon2" onClick={() => this.SEARCH_API()}><i className="fas fa-search"></i> Search!</button>
                                            </div>
                                            <div className="mt-4">
                                                <p className="lead">Help us to improve our Database.</p>
                                                <button className="btn btn-lg btn-danger shadow" onClick={() => this.props.OPEN_REPORT_FORM()}><i className="fas fa-flag"></i> Report a Scammer!</button>
                                            </div>
                                        </>
                                    }
                                    {isReportFormOpened &&
                                        <ReportForm/>
                                    }
                                </div>
                            </div>
                        </div>
                        {!isReportFormOpened &&
                        <div className="mx-auto mt-4 text-center">
                            <div className="card shadow">
                                <div className="card-body">
                                    <p className="lead">Internet fraud.</p>
                                    <div className="mt-4">
                                        <p className="" style={{fontSize: ".73rem"}}>
                                        Internet fraud is a type of cybercrime fraud or deception which makes use of the Internet and could involve hiding of information or providing incorrect information for the purpose of tricking victims out of money, property, and inheritance. Internet fraud is not considered a single, distinctive crime but covers a range of illegal and illicit actions that are committed in cyberspace. It is, however, differentiated from theft since, in this case, the victim voluntarily and knowingly provides the information, money or property to the perpetrator. It is also distinguished by the way it involves temporally and spatially separated offenders.

According to the FBI's 2017 Internet Crime Report, the Internet Crime Complaint Center (IC3) received about 300,000 complaints. Victims lost over $1.4 billion in online fraud in 2017. According to a study conducted by the Center for Strategic and International Studies (CSIS) and McAfee, cybercrime costs the global economy as much as $600 billion, which translates into 0.8% of total global GDP. Online fraud appears in many forms. It ranges from email spam to online scams. Internet fraud can occur even if partly based on the use of Internet services and is mostly or completely based on the use of the Internet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //Konular: state.Konular,
        isReportFormOpened: state.isReportFormOpened,
        isSearched: state.isSearched,
        //Bildirimler: state.Bildirimler,
        //SayfaDegistirici: state.SayfaDegistirici,
    }
}

export default connect(mapStateToProps,
    {
        OPEN_REPORT_FORM,
    })(Main);