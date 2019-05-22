import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import APIManager from "../modules/APIManager"
import AnimalDetail from './animal/AnimalDetail'
import { withRouter } from 'react-router'
import AnimalForm from './animal/AnimalForm'
class ApplicationViews extends Component {

    state = {
        animals: [],
        employees: [],
        locations: [],
        owners: [],
        animalOwners: []
    }

    // DELETE FUNCTIONS

    deleteAnimal = (id) => {
        const newState = {}
        APIManager.delete("animals", id)
        .then(() => APIManager.getAll("animals"))
        .then(animals => {
            this.props.history.push("/animals")
            newState.animals = animals
        })
        .then(() => this.setState(newState))
    }

    deleteEmployee = (id) => {
        const newState = {}
        APIManager.delete("employees", id)
        .then(() => APIManager.getAll("employees"))
        .then(employees => {
            newState.employees = employees
        })
        .then(() => this.setState(newState))
    }

    deleteLocation = (id) => {
        const newState = {}
        APIManager.delete("locations", id)
        .then(() => APIManager.getAll("locations"))
        .then(locations => {
            newState.locations = locations
        })
        .then(() => this.setState(newState))
    }

    deleteOwner = (id) => {
        const newState = {}
        APIManager.delete("owners", id)
        .then(() => APIManager.getAll("owners"))
        .then(owners => {
            newState.owners = owners
        })
        .then(() => this.setState(newState))
    }

    // ADD FUNCTIONS

    addAnimal = (animal) =>
        APIManager.post("animals", animal)
        .then(() => APIManager.getAll("animals"))
        .then(animals =>
        this.setState({
            animals: animals
        })
    );
    

    componentDidMount() {
        
        const newState = {}

        APIManager.getAll("animals")
        .then(animals => newState.animals = animals)
            .then(() => APIManager.getAll("employees"))
            .then(employees => newState.employees = employees)
                .then(() => APIManager.getAll("locations"))
                .then(locations => newState.locations = locations)
                    .then(() => APIManager.getAll("owners"))
                    .then(owners => newState.owners = owners)
                        .then(() => this.setState(newState))

    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} deleteLocation={this.deleteLocation}/>
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList
                        {...props}
                        animals={this.state.animals}
                        deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )
                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = {id:404, name:"404", breed: "Dog not found"}
                    }
                    return <AnimalDetail animal={animal}
                                deleteAnimal={this.deleteAnimal} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} deleteOwner={this.deleteOwner} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)