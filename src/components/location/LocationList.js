import React, { Component } from 'react'


export default class LocationList extends Component {
    render() {
        return (
            <React.Fragment>

                <h2 className="kennel">Kennel Locations</h2>
                <section className="locations kennel">

                    {
                        this.props.locations.map(location =>
                            <div key={location.id}>
                                {location.name}<br />
                                {location.address}
                            </div>
                        )
                    }
                </section>
                
            </React.Fragment>

        );
    }
}