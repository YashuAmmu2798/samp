import React, { Component } from 'react'
import {faker} from '@faker-js/faker'

class App2 extends Component {
    constructor()
    {
        super()
        this.state={   
            img: faker.image.avatar()
        }
    }
  render() {
    return (
      <div>
        <img src={this.state.img} /> <br/>
        <button>CHANGE</button>
      </div>
    )
  }
}
export default App2