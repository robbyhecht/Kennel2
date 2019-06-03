import React, { Component } from 'react'


class OwnerList extends Component {

    render() {
        return (
            <React.Fragment>

                <h2 className="kennel heading">Kennel Owners</h2>
                <section className="owners kennel">

                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            {owner.name}<br />
                            {owner.phone}
                        </div>
                    )
                }
                </section>
            
            </React.Fragment>
        );
    }
}

export default OwnerList