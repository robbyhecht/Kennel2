import React, { Component } from 'react'


class AnimalList extends Component {

    handleClick = (id) => {
        // console.log("click", event, this.props.animal.id)
        this.props.deleteAnimal(id)
    }

    render() {
        return (
            <React.Fragment>

                <h2 className="kennel">Kennel Animals</h2>
                <section className="animals kennel">

                {
                    this.props.animals.map(animal => 
                        <div key={animal.id}>
                            {animal.name}<br />
                            {animal.breed}<br />
                            <button onClick={() => this.props.deleteAnimal(animal.id)}>DELETE</button>
                        </div>
                    )
                }
                </section>

            </React.Fragment>
        );
    }
}

export default AnimalList