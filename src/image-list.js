import React, { Component } from 'react';
import Images from './image-item.js';

class ImgList extends Component {
   
    render() { 
        return ( 
            <>
            {this.props.creatures.map((element) => {
                return <Images key={element.name} image={element} />;
            })}
            </>
         );
    }
}
 
export default ImgList;