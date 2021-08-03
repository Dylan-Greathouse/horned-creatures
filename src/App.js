import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ImgList from './image-list.js';
import creatures from './horned-creatures.js';
class App extends Component {
  state = { 
      keyword: 'All',
   };
   showChanges = (e) => {
     this.setState({ keyword: e.target.value });
   };
  render() { 
    const filterMonsters = creatures.filter(
      (creature) => this.state.keyword === 'All' || creature.keyword === this.state.keyword
    );
    return ( 
      <div className="App">
        <Header />
        <select onChange={this.showChanges}>
          <option value="All">ALL THE MONSTERS</option>
          <option value="narwhal">Narwhals Narwhals</option>
          <option value=""
        </select>
      <ImgList 
        creatures={filterMonsters}
        />
      </div>
     );
  }
}
 
export default App;
