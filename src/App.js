import React, { Component } from 'react';
// import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
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
    };
    this.state.devitos.forEach(devito => {
      devito.count = 0;
    });
    alert(`Game Over! Your score was ${this.state.score}. The High Score is ${this.state.totalScore}!`);
    return true;
  }

  // scoreAdd = () => {
  //   this.state.devitos.find((o, i) => {
  //     console.log(o);
  //     if (o.id === id) {
  //       console.log(`i is : ${i}`);
  //       if(devitos[i].count === 0){
  //         devitos[i].count = devitos[i].count + 1;
  //         this.setState((state) => {
  //           return {score : state.score + 1}, function(){
  //             console.log(state.score);
  //           }
  //         });
  //         this.state.devitos.sort(() => Math.random() - 0.5)
  //         return true; 
  //       } else {
  //         return this.gameOver()
  //       }
  //     }
  //   });
  // }

  handleClick = (id) => {
    console.log('this is', this.state.devitos.id);
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
            {/* <Wrapper> */}
              {
                this.state.devitos.map(
                  devito => (
                    <Card
                      key={devito.id}
                      name={devito.name}
                      image={devito.image}
                      count={devito.count}
                      handleClick={this.handleClick}
                    />
                  )
                )
              }
            {/* </Wrapper> */}
          </div>
        </div>
        <Footer />
      </div>
    )
  };

}

export default App;