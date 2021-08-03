import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body.js'
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
      <>
        <Header />
        <Body />
        <section>
        <ImgList 
          creatures={filterMonsters}
          />
          </section>
      </>
     );
  }
}
 
export default App;
