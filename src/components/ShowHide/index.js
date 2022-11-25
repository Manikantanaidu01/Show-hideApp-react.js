// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstCard: false, lastCard: false}

  firstName = () => {
    const {firstCard} = this.state
    this.setState(() => ({firstCard: !firstCard}))
  }

  lastName = () => {
    const {lastCard} = this.state
    this.setState(() => ({
      lastCard: !lastCard,
    }))
  }

  render() {
    const {firstCard, lastCard} = this.state
    return (
      <div className="bg-container">
        <h1>show/hide</h1>
        <div className="cards-container">
          <div className="card-container">
            <button
              type="button"
              className="btn-style"
              onClick={this.firstName}
            >
              show/hide firstname
            </button>
            {firstCard ? <p className="name-card">Joe</p> : ''}
          </div>
          <div className="card-container">
            <button type="button" className="btn-style" onClick={this.lastName}>
              show/hide lastname
            </button>
            {lastCard ? <p className="name-card">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
