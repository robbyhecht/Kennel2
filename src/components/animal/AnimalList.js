import React, { Component } from 'react'
import AnimalItem from './AnimalItem'
import './../../App.css'


class AnimalList extends Component {

    render() {
        return (
            <React.Fragment>

            <h2 className="heading">All Animals</h2>
            
            <section>
                <div className="card-container">
                {
                    this.props.animals.map((animal) => {
                        return <AnimalItem key={animal.id} {...this.props} animal={animal} deleteAnimal={this.props.deleteAnimal} />
                    })
                }
                </div>
            </section>

            <br />

            <div className="animalButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")}
                        }>
                    Admit Animal
                </button>
            </div>

            </React.Fragment>
        )
    }
}

export default AnimalList