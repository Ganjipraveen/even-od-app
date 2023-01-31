import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onClickIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const evenOrOdd = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="even-odd">Count is {evenOrOdd}</p>
          <button
            type="button"
            className="button"
            onClick={this.onClickIncrement}
          >
            Increment
          </button>
          <p className="name">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
