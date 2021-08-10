import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="btn-container">
        <button className="btn" type="button" onClick={this.onDecrement}>
          -
        </button>
        <div> {count}</div>
        <button className="btn" type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    )
  }
}

export default Counter
