import React from 'react'
import './App.style.css'

import SearchBox from './components/search-box/search-box.component'
import CardList from './components/card-list/card-list.component'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      monsters:[],
      textSearchField: '',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(jsonMonsters => this.setState({monsters: jsonMonsters}))
  }
  onSearchChange = event => {
    this.setState({textSearchField: event.target.value})
  }

  render(){
    const filteredMonsters = this.state.monsters.filter(monster => 
      monster.name.toLowerCase().includes(this.state.textSearchField.toLowerCase())
    )
    return (
      <div className='container'>
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
      )
  }
}

export default App