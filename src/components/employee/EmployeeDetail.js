import React, { Component } from "react"
import "./Employee.css"

export default class Animal extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        this.setState({ saveDisabled: true })
        this.props.deleteEmployee(this.props.employee.id)
    }

    render() {
        return (
            <section className="employee detail-container">
                <div key={ this.props.employee.id } className="card detail-card">
                    <div className="card-body">
                        <h4 className="card-title">
                            { this.props.employee.name }
                        </h4>
                        <h6 className="card-title">{ this.props.employee.breed }</h6>
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
                    </div>
                </div>
            </section>
        )
    }
}