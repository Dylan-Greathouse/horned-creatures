import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ImgList from './image-list.js';
import creatures from './horned-creatures.js';
import Dropdown from './Dropdown.js';


class App extends Component {
  state = { 
      keyword: 'All',
      horns: 'All'
   };
   options = ['All', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops',
  'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon'];
   hornsOptions = ['All', 1, 2, 3, 100];


   showChanges = (e) => {
     this.setState({ keyword: e.target.value });
   };

   showHornChange = (e) => {
    const numHorns = e.target.value;
    this.setState({ horns: numHorns });
   };
  render() { 
    const filterMonsters = creatures.filter(
      (creature) => this.state.keyword === 'All' || creature.keyword === this.state.keyword
    );
    const filterMonstersHorns = filterMonsters.filter(
      (creature) => this.state.horns === 'All' || creature.horns === Number(this.state.horns)
    );
    return ( 
      <>
        <Header />
        
        <Dropdown  options={this.options} changeEvent={this.showChanges} />
        <Dropdown  options={this.hornsOptions} changeEvent={this.showHornChange} />
        
        {/* <select onChange={this.showChanges}>
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
          </select> */}
        <section>
        <ImgList 
          creatures={filterMonstersHorns}
          />
          </section>
      </>
     );
  }
}
 
export default App;
