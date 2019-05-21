import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import APIManager from "../modules/APIManager"



export default class ApplicationViews extends Component {

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

        // APIManager.getAll("employees")
        //     .then(employees => newState.employees = employees)
        //     .then(() => this.setState(newState))

        

    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} deleteLocation={this.deleteLocation}/>
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} deleteAnimal={this.deleteAnimal} />
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





// import { Route } from 'react-router-dom'
// import React, { Component } from "react"
// import AnimalList from './animal/AnimalList'
// import LocationList from './location/LocationList'
// import EmployeeList from './employee/EmployeeList'
// import OwnerList from './owner/OwnerList'



// class ApplicationViews extends Component {
//     // employeesFromAPI = [
//     //     { id: 1, name: "Jessica Younker" },
//     //     { id: 2, name: "Jordan Nelson" },
//     //     { id: 3, name: "Zoe LeBlanc" },
//     //     { id: 4, name: "Blaise Roberts" }
//     // ]

//     // locationsFromAPI = [
//     //     { id: 1, name: "Nashville North", address: "500 Circle Way" },
//     //     { id: 2, name: "Nashville South", address: "10101 Binary Court" }
//     // ]

//     // animalsFromAPI = [
//     //     { id: 1, name: "Doodles" },
//     //     { id: 2, name: "Jack" },
//     //     { id: 3, name: "Angus" },
//     //     { id: 4, name: "Henley" },
//     //     { id: 5, name: "Derkins" },
//     //     { id: 6, name: "Checkers" }
//     // ]

//     // ownersFromAPI= [
//     //     { id: 1, phone: "865-865-8685",name: "Ryan Tanay" },
//     //     { id: 2, phone: "415-415-4145",name: "Emma Beaton" },
//     //     { id: 3, phone: "615-615-6165",name: "Dani Adkins" },
//     // ]

//     state = {
//         employees: this.employeesFromAPI,
//         locations: this.locationsFromAPI,
//         animals: this.animalsFromAPI,
//         owners: this.ownersFromAPI,
//     }

//     state = {
//         locations: [],
//         animals: [],
//         employees: []
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <Route exact path="/" render={(props) => {
//                     return <LocationList locations={this.state.locations} />
//                 }} />
//                 <Route path="/animals" render={(props) => {
//                     return <AnimalList animals={this.state.animals} />
//                 }} />
//                 <Route path="/employees" render={(props) => {
//                     return <EmployeeList employees={this.state.employees} />
//                 }} />
//                 <Route path="/owners" render={(props) => {
//                     return <OwnerList owners={this.state.owners} />
//                 }} />
//             </React.Fragment>
//         )
//     }
// }

// export default ApplicationViews




        // AnimalManager.getAll()
        //     .then(allAnimals => {
        //     this.setState({
        //     animals: allAnimals
        //     })
        // })