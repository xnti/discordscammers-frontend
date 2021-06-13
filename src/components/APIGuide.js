import React, { Component } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-json';
import '../prism.css'


class APIGuide extends Component {
    componentDidMount = () => {
        setTimeout(() => Prism.highlightAll(), 0)
    }
    render() {
        return (
            <div className="container-fluid mb-3">
                <div className="row justify-content-center">

                    <div className="col-lg-4">
                        <div className="mx-auto mt-4 text-center">
                            <div className="card shadow">
                                <div className="card-body">
                                    <p className="text-start lead" style={{ cursor: 'pointer' }}><a className="text-decoration-none text-dark" href="/"><i className="fas fa-arrow-left"></i> Return</a></p>
                                    <p className="display-6">Search API</p>
                                    <div className="text-start">
                                        <p className="lead"><code><span class="badge bg-secondary">GET</span> /api/v1/search/{`{searchID}`}</code></p>
                                        <p className="m-0 mt-2 text-black-50">Body:</p>
                                        <p>"Body" is not required.</p>
                                        <p className="m-0 mt-2 text-black-50">
                                            Return value:
                                        </p>
                                        <p>
                                            <pre><code className="language-json">
{`{
    status: "string",
    requested_id: "string",
    request_date: "string",
    fraud_score: int,
    report_count: int,
    scam_reports: [array]
}`}
                                            </code></pre>
                                        </p>
                                    </div>

                                    <p className="display-6">Report API</p>
                                    <div className="text-start">
                                        <p className="lead"><code><span class="badge bg-primary">POST</span> /api/v1/report</code></p>
                                        <p className="m-0 mt-2 text-black-50">Body:</p>
                                        <p>
                                            <pre><code className="language-json">
{`{
    ScammerID: "string",
    ScammerUsername: "string",
    AdditionalInfo: "string"
}`}
                                            </code></pre>
                                        </p>
                                        <p className="m-0 mt-2 text-black-50">
                                            Return value:
                                        </p>
                                        <p>
                                            <pre><code className="language-json">
{`{
    status: "string",
    reported_before: bool,
    date: "string"
}`}
                                            </code></pre>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default APIGuide;