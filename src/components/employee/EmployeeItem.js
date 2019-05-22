import React, { Component } from "react"
import "./Employee.css"
import {Link} from 'react-router-dom'


export default class EmployeeItem extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        this.setState({ saveDisabled: true })
        this.props.deleteEmployee(this.props.employee.id)
    }

    render() {
        return (

            <React.Fragment>

            <section className="employee">
                <div key={ this.props.employee.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            { this.props.employee.name }
                        </h4>
                        <div className="button-container">
                            <button onClick={() => {
                                        this.setState(
                                            { saveDisabled: true },
                                            () => this.props.deleteEmployee(this.props.employee.id)
                                        )
                                    }
                                }
                                disabled={ this.state.saveDisabled }
                                className="card-link">Delete</button>
                        </div>
                        <div className="button-container">
                            <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Details</Link>
                        </div>
                    </div>
                </div>
            </section>

            </React.Fragment>
        )
    }

}