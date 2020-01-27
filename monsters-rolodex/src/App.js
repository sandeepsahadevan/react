import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';
import { Search } from './components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();
    console.log('constructor');
    this.state = {
      monsters : [],
      searchMonster : ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextState.monsters );
    return true;
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
        <h1>monster rolodex</h1>
        <Search placeholder = 'Select Monster' handleChange={this.handleChange}/>
        {filteredMonsters.length >0 ? <CardList monsters={filteredMonsters}/> : null }
      </div>
    )
  }
}

export default App;
