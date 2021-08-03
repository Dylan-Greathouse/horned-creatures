import React, { Component } from 'react';

class Images extends Component {

    render() { 
        return ( 
            <>
            <p>
                {this.props.image.name}
                <img alt={this.props.image.name} width="200" height="200" src={this.props.image.url} />
            </p>
            </>

         );
    }
}
 
export default Images;