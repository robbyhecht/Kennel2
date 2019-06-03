import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import APIManager from "../modules/APIManager"
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import { withRouter } from 'react-router'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import Login from './authentication/Login'

class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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

    // EDIT FUNCTIONS

    updateAnimal = (editedAnimalObject) => {
        return APIManager.put("animals", editedAnimalObject)
        .then(() => APIManager.getAll("animals"))
        // .then(animals => { this.props.history.push("/animals")})
        .then(animals => {
            this.setState({
                animals: animals
            })
        })
    };
    

    componentDidMount() {
        
        const newState = {} //set initial object

        APIManager.getAll("animals") // get all the animals
        .then(animals => newState.animals = animals) // assign animals to newState object
            .then(() => APIManager.getAll("employees")) // get all the employees
            .then(employees => newState.employees = employees) // etc.
                .then(() => APIManager.getAll("locations"))
                .then(locations => newState.locations = locations)
                    .then(() => APIManager.getAll("owners"))
                    .then(owners => newState.owners = owners)
                        .then(() => this.setState(newState)) // set the new state

    }

    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} deleteLocation={this.deleteLocation}/>
                }} />
                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList
                            {...props}
                            animals={this.state.animals}
                            deleteAnimal={this.deleteAnimal} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )
                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = {id:404, name:"404", breed: "Dog not found"}
                    }
                    return <AnimalDetail {...props} animal={animal}
                                deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal}/>
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee}
                                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    // Find the employee with the id of the route parameter
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )
                    // If the employee wasn't found, create a default one
                    if (!employee) {
                        employee = {id:404, name:"404", breed: "Dog not found"}
                    }
                    return <EmployeeDetail employee={employee}
                                deleteEmployee={this.deleteEmployee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} deleteOwner={this.deleteOwner} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)