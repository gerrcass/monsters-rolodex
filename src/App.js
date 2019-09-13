import React from 'react'
import Styles from './App.module.css'

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
      .then(json => this.setState({monsters: json}))
  }
  onSearchChange = event => {
    this.setState({textSearchField: event.target.value})
  }

  render(){
    const filteredMonsters = this.state.monsters.filter(monsterName => 
      monsterName.name.toLowerCase().includes(this.state.textSearchField.toLowerCase())
    )
    return <div className={Styles.container}>
      <h1>Monsters Rolodex</h1>
      <SearchBox onSearchChange={this.onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  }
}

export default App