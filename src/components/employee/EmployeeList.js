import React, { Component } from 'react'
import EmployeeItem from './EmployeeItem'
import './../../App.css'



class EmployeeList extends Component {

    handleClick = (id) => {
        // console.log("click", event, this.props.employee.id)
        this.props.deleteEmployee(id)
    }

    render() {
        return (
            <React.Fragment>

                <h2 className="kennel heading">Kennel Employees</h2>
                <section className="employees kennel">

                {
                    this.props.employees.map((employee) => {
                        return <EmployeeItem key={employee.id} employee={employee} deleteEmployee={this.props.deleteEmployee} /> 
                    })
                }
                </section>
            
            </React.Fragment>
        );
    }
}

export default EmployeeList