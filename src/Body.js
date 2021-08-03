import React, { Component } from 'react';

class Body extends Component {
  
    render() { 
        return ( 
            <>
            <select onChange={this.showChanges}>
            <option value="All">ALL THE MONSTERS</option>
            <option value="narwhal">Narwhals Narwhals</option>
            <option value="rhino">Rhino will RYNO</option>
            <option value="unicorn">OMG! Unicorns!</option>
            <option value="unilego">Unilego?? UM WAT?!</option>
            <option value="triceratops">This triceratops and star leaves, I swear..</option>
            <option value="markhor">Markhor</option>
            <option value="mouflon">Mouflon making me crazy</option>
            <option value="addax">Addaxing all the questions</option>
            <option value="chameleon">Chameleon comes and goes</option>
            <option value="lizard">Lizards, love them</option>
            <option value="dragon">Smaug the dragon</option>
          </select>
      
          </>
         );
    }
}
 
export default Body;