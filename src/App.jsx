import React, {useState} from 'react'
import {faker} from '@faker-js/faker'

const App = () => {
  let[img, setImg] = useState(faker.image.cats())
  return (
    <div>
      <img src={img}  /> <br/>
      <button onClick={()=>{
        setImg(faker.image.cats())
      }}>CHANGE </button>
    </div>
  )
}

export default App