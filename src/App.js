import React, { Component } from 'react'

import { CardList } from './Components/card-list/card-list.component';
import { SearchBox} from './Components/searchbox.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
    };
  }

handlechange = (e) => {
  this.setState({searchField:e.target.value})
}
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState ({monsters: users}));
  }
  render() {
    const { monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        <SearchBox 
         placeholder='Search monsters'
         handlechange={this.handlechange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
