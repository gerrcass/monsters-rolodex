import React from 'react'
import './App.style.css'

import SearchBox from './components/search-box/search-box.component'
import CardList from './components/card-list/card-list.component'
import SelectImageSet from './components/select-image-set/select-image-set.component'

const imageSetAvailable = [
  {
      label: 'Robofriends',
      image: 'set1'
  },
  {
      label: 'Monster Rolodex',
      image: 'set2'
  },
  {
      label: 'Disembodied Heads',
      image: 'set3'
  },
  {
      label: 'Beautiful Kittens',
      image: 'set4'
  },
  {
      label: 'Humans Technicians',
      image: 'set5'
  },
  {
      label: 'Any',
      image: 'any'
  }
]

class App extends React.Component{
  constructor(){
    super()
    this.state={
      monsters:[],
      textSearchField: '',
      imageSet: 'set2',
      title: 'Monsters Rolodex'
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
  onImageSetChange = (event) => {
    const imageSet = imageSetAvailable.filter(obj => {
      return obj.image === event.target.value
    })
  
     this.setState({
      imageSet: imageSet[0].image,
      title: imageSet[0].label
    })
  }

  render(){
    const filteredMonsters = this.state.monsters.filter(monster => 
      monster.name.toLowerCase().includes(this.state.textSearchField.toLowerCase())
    )
    return (
      <div className='container'>
        <h1>{this.state.title}</h1>
        <SelectImageSet imageSetAvailable={imageSetAvailable} imageSet={this.state.imageSet} onImageSetChange={this.onImageSetChange}/>
        <SearchBox onSearchChange={this.onSearchChange} title={this.state.title} />
        <CardList monsters={filteredMonsters} imageSet={this.state.imageSet}/>
      </div>
      )
  }
}

export default App