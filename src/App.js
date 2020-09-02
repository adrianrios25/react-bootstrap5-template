import React from "react";
import "./scss/main.scss";

function App() {
    return (
        <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        Navbar
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav mr-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a
                                    className='nav-link active'
                                    aria-current='page'
                                    href='!#'
                                >
                                    Home
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='!#'>
                                    Link
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link disabled'
                                    href='!#'
                                    tabindex='-1'
                                    aria-disabled='true'
                                >
                                    Disabled
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div
                class='alert alert-warning alert-dismissible fade show'
                role='alert'
            >
                <strong>Holy guacamole!</strong> You should check in on some of
                those fields below.
                <button
                    type='button'
                    class='close'
                    data-dismiss='alert'
                    aria-label='Close'
                >
                    <span aria-hidden='true'>&times;</span>
                </button>
            </div>
            <div className='btn btn-danger'>BTN Danger</div>
            <div className='custom-element'>Custom Element</div>
        </div>
    );
}

export default App;
