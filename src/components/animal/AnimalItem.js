import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.svg"
import {Link} from 'react-router-dom'

export default class AnimalItem extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        this.setState({ saveDisabled: true })
        this.props.deleteAnimal(this.props.animal.id)
    }

    render() {
        return (

            <React.Fragment>

            <section className="animal">
                <div key={ this.props.animal.id } className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ dog } className="icon--dog" alt="dog" />
                            { this.props.animal.name }
                        </h4>
                        <div className="button-container">
                            <button // edit button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                                }}>Edit
                            </button>
                        </div>
                        <div className="button-container">
                            <button // delete button
                                onClick={() => {
                                        this.setState(
                                            { saveDisabled: true },
                                            () => this.props.deleteAnimal(this.props.animal.id)
                                        )
                                    }
                                }
                                disabled={ this.state.saveDisabled }
                                className="card-link">Delete
                            </button>
                        </div>
                        <div className="button-container">
                            <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                        </div>
                    </div>
                </div>
            </section>

            </React.Fragment>
        )
    }
}