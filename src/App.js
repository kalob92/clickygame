import React, { Component } from 'react';
import Card from './components/cards/card';
import Navbar from './components/navbar';
import Footer from './components/footer'
import devitos from './devito.json';
import './App.css';

class App extends Component {
  state = {
    devitos,
    score: 0,
    totalScore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.totalScore) {
      this.setState({totalScore: this.state.score});
    }
    this.state.devitos.forEach(devito => {
      devito.count = 0;
    })
    alert(`Game Over! Your score was ${this.state.score}. The High Score is ${this.state.totalScore}!`)
    return true;
  }

  scoreAdd(id) {
    this.state.devitos.find((o, i) => {
      if (o.id === id) {
        if(devitos[i].count === 0) {
          devitos[i].count = devitos[i].count++;
          this.setState({score: this.state.score + 1}, function() {
            console.log(this.state.score);
          });
          this.state.devitos.sort(() => Math.random() - 0.5)
          return true;
        } else {
          return this.gameOver();
        }
      } else {
        return false;
      }
    })
  }

  render() {
    return (
      <div className='everything'>
        <Navbar
        score={this.state.score}
        totalScore={this.state.totalScore}
        />
        <div className="container content-row pt-3 px-4 mx-auto">
          <div className='row'>
            {
              this.state.devitos.map(
                devito => (
                  <Card
                    key={devito.id}
                    name={devito.name}
                    image={devito.image}
                    count={devito.count}
                    onClick={this.scoreAdd}
                  />
                )
              )
            }
          </div>
        </div>
        <Footer />
      </div>
    )
  };
}

export default App;