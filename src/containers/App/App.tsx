import React, { Component } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from './../../assets/images/logo.png';

library.add(faBars);

export interface Props { }

export interface State { }

class App extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
    }

    componentDidMount(): void {
    }

    render(): React.ReactNode {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-transparent fixed-top">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo - Trello com React" />
                        <span className="text">
                        rello
                    </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <span className="navbar-nav mr-auto">

                    </span>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Link 1 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 3</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link 4</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-12">
                                <h1 className="display-4 text-center">
                                    Kanban - React Trello
                                </h1>
                                <h4 className="text-center">
                                    By Paulo Panissa Filho
                                </h4>
                            </div>
                            <div className="col mt-4 text-center">
                                <a href="javascript:void(0);" className="btn btn-outline-primary">
                                    Sign up NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        )
    }

}

export default App;