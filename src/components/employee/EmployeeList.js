import React, { Component } from 'react'


class EmployeeList extends Component {

    render() {
        return (
            <React.Fragment>

                <h2 className="kennel">Kennel Employees</h2>
                <section className="employees kennel">

                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.name}<br />
                            <button onClick={() => this.props.deleteEmployee(employee.id)}>DELETE</button>
                        </div>
                       
                    )
                }
                </section>
            
            </React.Fragment>
        );
    }
}

export default EmployeeList