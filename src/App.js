import React, { Component } from 'react';
import Card from './components/cards/card.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js'
import cards from './cards.json';
import './App.css';

class App extends Component {
  state = {
    cards,
    score: 0,
    totalScore: 0
  }

  render() {
    return (
      <div className='bg-secondary'>
        <Navbar />
        <div className="container row pt-3 px-4 mx-auto mb-3">
          {
            this.state.cards.map(
              card => (
                <Card
                  id={card.id}
                  name={card.name}
                  image={card.image}
                  count={card.count}
                />
              )
            )
          }
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;