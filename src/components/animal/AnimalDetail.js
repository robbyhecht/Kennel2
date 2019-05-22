import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.svg"

export default class Animal extends Component {

    state = {
        saveDisabled: false
    }

    handleClick = (event) => {
        this.setState({ saveDisabled: true })
        this.props.deleteAnimal(this.props.animal.id)
    }

    render() {
        return (
            <section className="animal detail-container">
                <div key={ this.props.animal.id } className="card detail-card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={ dog } className="icon--dog icon-detail" alt="dog" />
                            { this.props.animal.name }
                        </h4>
                        <h6 className="card-title">{ this.props.animal.breed }</h6>
                        <div className="button-container">
                            <button onClick={() => {
                                        this.setState(
                                            { saveDisabled: true },
                                            () => this.props.deleteAnimal(this.props.animal.id)
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


// import React, { Component } from "react"
// import "./Animal.css"
// import dog from "./DogIcon.svg"


// export default class Animal extends Component {
//     state = {
//         saveDisabled: false
//     }

//     render() {
//         return (
//             <section className="animal">
//                 <div key={ this.props.animal.id } className="card">
//                     <div className="card-body">
//                         <h4 className="card-title">
//                             <img src={ dog } className="icon--dog" />
//                             { this.props.animal.name }
//                         </h4>
//                         <h6 className="card-title">{ this.props.animal.breed }</h6>
//                         <button onClick={
//                                 () => {
//                                     this.setState(
//                                         { saveDisabled: true },
//                                         () => this.props.dischargeAnimal(this.props.animal.id)
//                                     )
//                                 }
//                             }
//                             disabled={ this.state.saveDisabled }
//                             className="card-link">Delete</button>
//                     </div>
//                 </div>
//             </section>
//         )
//     }
// }


//     render () {
//         return (
//             <section className="animals">
//             {
//                 this.props.animals.map(animal =>
//                     <div key={animal.id} className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">
//                                 <img src={dog} className="icon--dog" />
//                                 {animal.name}
//                                 <button
//                                     onClick={() => this.props.deleteAnimal(animal.id)}
//                                     className="card-link">Delete</button>
//                             </h5>
//                         </div>
//                     </div>
//                 )
//             }
//             </section>
//         )
//     }
// }