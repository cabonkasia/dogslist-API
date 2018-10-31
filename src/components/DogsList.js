import React, {Component} from 'react'
import './DogsList.css'
import * as request from 'superagent'

export default class DogsList extends Component {
  // state = { dogBreeds: null }
  state = {dogBreeds: []}

  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => this.updateBreeds(Object.keys(response.body.message)))
      .catch(console.error)
  }

  
  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }


  render() {
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        { this.state.dogBreeds === null && 'Loading...' }
        { <ul>
          { this.state.dogBreeds.map(breed => <li key={breed}>{breed}</li>) }
          </ul> }
  
      </div>
    )
  }
}