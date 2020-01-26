import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'
import logo from './logo.svg';
import './App.css';
import { Search } from './components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchMonster : ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  handleChange = (e) => {
    this.setState( {searchMonster : e.target.value});
  }

  render() {
    const { monsters, searchMonster } =this.state;
    const  filteredMonsters  = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchMonster.toLowerCase())
      )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Search placeholder = 'Select Monster' handleChange={this.handleChange}/>
          <CardList monsters={filteredMonsters}/>        
        </header>
      </div>
    )
  }
}

export default App;
