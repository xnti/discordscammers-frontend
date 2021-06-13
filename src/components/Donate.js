import React, { Component } from 'react'

class Donate extends Component {
    render() {
        return (
            <div className="container-fluid mb-3">
                <div className="row justify-content-center">

                    <div className="col-lg-4">
                        <div className="mx-auto mt-4 text-center">
                            <div className="card shadow">
                                <div className="card-body">
                                <p className="text-start lead"  style={{ cursor: 'pointer' }}><a className="text-decoration-none text-dark" href="/"><i className="fas fa-arrow-left"></i> Return</a></p>
                                    <p className="display-6">Donate</p>
                                    <p className="lead">Why do we accept donations?</p>
                                    <p className="text-start">We do the development and maintenance of this website entirely on a voluntary basis. Our main goal is to prevent possible fraud. But there are server and domain expenses. This is the main reason we accept donations. All donations will be used to maintain this system and application.</p>
                                    <hr />
                                    <p className="display-6"> PayPal</p>
                                    <p className="lead"><i class="text-primary fab fa-paypal fa-2x"></i> alexadragu@yahoo.com</p>
                                    <hr />
                                    <p className="display-6">Cryptocurrencies</p>
                                    <p className="lead"><i class="text-warning fab fa-btc fa-2x"></i> 3CYHQYYm4kbZZzETKtKuYgUdkGTEFsgSLP</p>
                                    <p className="lead"><i class="fab fa-ethereum fa-2x"></i> 0x9CE34040593aDA0Be1F4Cf51e35d70cF667dfc0A</p>
                                    <hr/>
                                    <p className="text-muted m-0 mt-4">Thank you for your all support.💙</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Donate;