import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import Round from '../../Components/Round/Round';
import './Home.css';

export default class Home extends Component {
  // Initialization of the state . . .

  constructor(props){
    super(props);

    this.state = {
      count: 1,
      score: 0,
      again: "none",
      vsb1: "yes", vsb2: "no", vsb3: "no", vsb4: "no", vsb5: "no",
      btn1: "block", btn2: "none", btn3: "none", btn4: "none", btn5: "none",
      c1rnd1: Math.floor(Math.random() * 13 + 1), c2rnd1: Math.floor(Math.random() * 13 + 1), c3rnd1: Math.floor(Math.random() * 13 + 1), optionRnd1: "", statusRnd1: "",
      c1rnd2: "", c2rnd2: "", c3rnd2: "", optionRnd2: "", statusRnd2: "",
      c1rnd3: "", c2rnd3: "", c3rnd3: "", optionRnd3: "", statusRnd3: "",
      c1rnd4: "", c2rnd4: "", c3rnd4: "", optionRnd4: "", statusRnd4: "",
      c1rnd5: "", c2rnd5: "", c3rnd5: "", optionRnd5: "", statusRnd5: "",
    }
  }

  // Function for displaying the deal when the user win . . .
  dealWin = () => {
    switch (this.state.count) {
      case 1: this.setState({
        score: this.state.score + 1, optionRnd1: "Deal", statusRnd1: "WIN", c1rnd2: Math.floor(Math.random() * 13 + 1), c2rnd2: Math.floor(Math.random() * 13 + 1),
        c3rnd2: Math.floor(Math.random() * 13 + 1), btn1: "none", btn2: "block", vsb2: "yes",
      }) 
      break;
      case 2: this.setState({
        score: this.state.score + 1, optionRnd2: "Deal", statusRnd2: "WIN", c1rnd3: Math.floor(Math.random() * 13 + 1), c2rnd3: Math.floor(Math.random() * 13 + 1),
        c3rnd3: Math.floor(Math.random() * 13 + 1), btn2: "none", btn3: "block", vsb3: "yes",
      }) 
      break;
      case 3: this.setState({
        score: this.state.score + 1, optionRnd3: "Deal", statusRnd3: "WIN", c1rnd4: Math.floor(Math.random() * 13 + 1), c2rnd4: Math.floor(Math.random() * 13 + 1),
        c3rnd4: Math.floor(Math.random() * 13 + 1), btn3: "none", btn4: "block", vsb4: "yes",
      }) 
      break;
      case 4: this.setState({
        score: this.state.score + 1, optionRnd4: "Deal", statusRnd4: "WIN", c1rnd5: Math.floor(Math.random() * 13 + 1), c2rnd5: Math.floor(Math.random() * 13 + 1),
        c3rnd5: Math.floor(Math.random() * 13 + 1), btn4: "none", btn5: "block", vsb5: "yes",
      }) 
      break;
      case 5: this.setState({
        score: this.state.score + 1, optionRnd5: "Deal", statusRnd5: "WIN", btn5: "none", again: "block",
      }) 
      break;
      default: break;
    }
  }

  // Function for displaying the no deal when the user passed . . .
  noDeal = () => {
    switch (this.state.count) {
      case 1: this.setState({
        score: this.state.score - this.state.score/2, optionRnd1: "No Deal", statusRnd1: "PASSED", c1rnd2: Math.floor(Math.random() * 13 + 1), 
        c2rnd2: Math.floor(Math.random() * 13 + 1), c3rnd2: Math.floor(Math.random() * 13 + 1), btn1: "none", btn2: "block", vsb2: "yes",
      }) 
      break;
      case 2: this.setState({
        score: this.state.score - this.state.score/2, optionRnd2: "No Deal", statusRnd2: "PASSED", c1rnd3: Math.floor(Math.random() * 13 + 1),
        c2rnd3: Math.floor(Math.random() * 13 + 1), c3rnd3: Math.floor(Math.random() * 13 + 1), btn2: "none", btn3: "block", vsb3: "yes",
      }) 
      break;
      case 3: this.setState({
        score: this.state.score - this.state.score/2, optionRnd3: "No Deal", statusRnd3: "PASSED", c1rnd4: Math.floor(Math.random() * 13 + 1),
        c2rnd4: Math.floor(Math.random() * 13 + 1), c3rnd4: Math.floor(Math.random() * 13 + 1), btn3: "none", btn4: "block", vsb4: "yes",
      }) 
      break;
      case 4: this.setState({
        score: this.state.score - this.state.score/2, optionRnd4: "No Deal", statusRnd4: "PASSED", c1rnd5: Math.floor(Math.random() * 13 + 1),
        c2rnd5: Math.floor(Math.random() * 13 + 1), c3rnd5: Math.floor(Math.random() * 13 + 1), btn4: "none", btn5: "block", vsb5: "yes",
      }) 
      break;
      case 5: this.setState({
        score: this.state.score - this.state.score/2, optionRnd5: "No Deal", statusRnd5: "PASSED", btn5: "none", again: "block",
      }) 
      break;
      default: break;
    }
  }

  //Deduction of points when user loses the round . . . 
  lose = () => {
    if(this.state.score === 0){
      return this.state.score;
    } else {
      return this.state.score - 1;
    }
  }

  // Function that handles the user actions when they choose to deal . . .
  deal = (c1, c2, c3) => {
    if (c1 < c3 && c3 < c2) {
      this.dealWin();
    } else if (c1 > c3 && c3 > c2) {
      this.dealWin();
    } else {
      switch (this.state.count) {
        case 1: this.setState({
          score: this.lose(), optionRnd1: "Deal", statusRnd1: "LOSE", c1rnd2: Math.floor(Math.random() * 13 + 1), c2rnd2: Math.floor(Math.random() * 13 + 1),
          c3rnd2: Math.floor(Math.random() * 13 + 1), btn1: "none", btn2: "block", vsb2: "yes",
        }) 
        break;
        case 2: this.setState({
          score: this.lose(), optionRnd2: "Deal", statusRnd2: "LOSE", c1rnd3: Math.floor(Math.random() * 13 + 1), c2rnd3: Math.floor(Math.random() * 13 + 1),
          c3rnd3: Math.floor(Math.random() * 13 + 1), btn2: "none", btn3: "block", vsb3: "yes",
        }) 
        break;
        case 3: this.setState({
          score: this.lose(), optionRnd3: "Deal", statusRnd3: "LOSE", c1rnd4: Math.floor(Math.random() * 13 + 1), c2rnd4: Math.floor(Math.random() * 13 + 1),
          c3rnd4: Math.floor(Math.random() * 13 + 1), btn3: "none", btn4: "block", vsb4: "yes",
        }) 
        break;
        case 4: this.setState({
          score: this.lose(), optionRnd4: "Deal", statusRnd4: "LOSE", c1rnd5: Math.floor(Math.random() * 13 + 1), c2rnd5: Math.floor(Math.random() * 13 + 1),
          c3rnd5: Math.floor(Math.random() * 13 + 1), btn4: "none", btn5: "block", vsb5: "yes",
        }) 
        break;
        case 5: this.setState({
          score: this.lose(), optionRnd5: "Deal", statusRnd5: "LOSE", btn5: "none", again: "block",
        }) 
        break;
        default: break;
      }
    }
  }

  // Function that handles the user choice input when they choose to start to play . . .
  option = (card1, card2, card3) => {
    if (card1 !== card2) {
      // This condition is if two cards generated are not identical . . .

      let choice = prompt("Please enter your option if \"Deal\" or \"No Deal\" \n\nNote that options are case sensitive! \nit should be typed as \"Deal\" and \"No Deal\"", "Type here . . .");
      if (choice === "Deal") {
          this.deal(card1, card2, card3);

      } else if (choice === "No Deal") {
        this.noDeal();
      } else {
        this.setState({
          count: this.state.count,
        })
      }
    } else {
      // This condition is if two cards generated are identical . . .

      let predict = prompt("Please enter your option if \"Higher\" or \"Lower\" and enter \"No Deal\" if you want to pass the round . . . \n\nNote that options are case sensitive! \nit should be typed as \"Higher\", \"Lower\", and \"No Deal\"", "Type here . . .");
      if (predict === "Higher") {

          if (card3 > card1) {
            switch (this.state.count) {
              case 1: this.setState({
                score: this.state.score + 1, optionRnd1: "Higher", statusRnd1: "WIN", c1rnd2: Math.floor(Math.random() * 13 + 1), c2rnd2: Math.floor(Math.random() * 13 + 1),
                c3rnd2: Math.floor(Math.random() * 13 + 1), btn1: "none", btn2: "block", vsb2: "yes",
              }) 
              break;
              case 2: this.setState({
                score: this.state.score + 1, optionRnd2: "Higher", statusRnd2: "WIN", c1rnd3: Math.floor(Math.random() * 13 + 1), c2rnd3: Math.floor(Math.random() * 13 + 1),
                c3rnd3: Math.floor(Math.random() * 13 + 1), btn2: "none", btn3: "block", vsb3: "yes",
              })
              break;
              case 3: this.setState({
                score: this.state.score + 1, optionRnd3: "Higher", statusRnd3: "WIN", c1rnd4: Math.floor(Math.random() * 13 + 1), c2rnd4: Math.floor(Math.random() * 13 + 1),
                c3rnd4: Math.floor(Math.random() * 13 + 1), btn3: "none", btn4: "block", vsb4: "yes",
              }) 
              break;
              case 4: this.setState({
                score: this.state.score + 1, optionRnd4: "Higher", statusRnd4: "WIN", c1rnd5: Math.floor(Math.random() * 13 + 1), c2rnd5: Math.floor(Math.random() * 13 + 1),
                c3rnd5: Math.floor(Math.random() * 13 + 1), btn4: "none", btn5: "block", vsb5: "yes",
              })
              break;
              case 5: this.setState({
                score: this.state.score + 1, optionRnd5: "Higher", statusRnd5: "WIN", btn5: "none", again: "block",
              }) 
              break;
              default: break;
            }
          } else {
            switch (this.state.count) {
              case 1: this.setState({
                score: this.lose(), optionRnd1: "Higher", statusRnd1: "LOSE", c1rnd2: Math.floor(Math.random() * 13 + 1), c2rnd2: Math.floor(Math.random() * 13 + 1),
                c3rnd2: Math.floor(Math.random() * 13 + 1), btn1: "none", btn2: "block", vsb2: "yes",
              }) 
              break;
              case 2: this.setState({
                score: this.lose(), optionRnd2: "Higher", statusRnd2: "LOSE", c1rnd3: Math.floor(Math.random() * 13 + 1), c2rnd3: Math.floor(Math.random() * 13 + 1),
                c3rnd3: Math.floor(Math.random() * 13 + 1), btn2: "none", btn3: "block", vsb3: "yes",
              })
              break;
              case 3: this.setState({
                score: this.lose(), optionRnd3: "Higher", statusRnd3: "LOSE", c1rnd4: Math.floor(Math.random() * 13 + 1), c2rnd4: Math.floor(Math.random() * 13 + 1),
                c3rnd4: Math.floor(Math.random() * 13 + 1), btn3: "none", btn4: "block", vsb4: "yes",
              }) 
              break;
              case 4: this.setState({
                score: this.lose(), optionRnd4: "Higher", statusRnd4: "LOSE", c1rnd5: Math.floor(Math.random() * 13 + 1), c2rnd5: Math.floor(Math.random() * 13 + 1),
                c3rnd5: Math.floor(Math.random() * 13 + 1), btn4: "none", btn5: "block", vsb5: "yes",
              }) 
              break;
              case 5: this.setState({
                score: this.lose(), optionRnd5: "Higher", statusRnd5: "LOSE", btn5: "none", again: "block",
              }) 
              break;
              default: break;
            }
          }
      } else if (predict === "Lower") {
          if (card3 < card1) {
            switch (this.state.count) {
              case 1: this.setState({
                score: this.state.score + 1, optionRnd1: "Lower", statusRnd1: "WIN", c1rnd2: Math.floor(Math.random() * 13 + 1), c2rnd2: Math.floor(Math.random() * 13 + 1),
                c3rnd2: Math.floor(Math.random() * 13 + 1), btn1: "none", btn2: "block", vsb2: "yes",
              }) 
              break;
              case 2: this.setState({
                score: this.state.score + 1, optionRnd2: "Lower", statusRnd2: "WIN", c1rnd3: Math.floor(Math.random() * 13 + 1), c2rnd3: Math.floor(Math.random() * 13 + 1),
                c3rnd3: Math.floor(Math.random() * 13 + 1), btn2: "none", btn3: "block", vsb3: "yes",
              }) 
              break;
              case 3: this.setState({
                score: this.state.score + 1, optionRnd3: "Lower", statusRnd3: "WIN", c1rnd4: Math.floor(Math.random() * 13 + 1), c2rnd4: Math.floor(Math.random() * 13 + 1),
                c3rnd4: Math.floor(Math.random() * 13 + 1), btn3: "none", btn4: "block", vsb4: "yes",
              }) 
              break;
              case 4: this.setState({
                score: this.state.score + 1, optionRnd4: "Lower", statusRnd4: "WIN", c1rnd5: Math.floor(Math.random() * 13 + 1), c2rnd5: Math.floor(Math.random() * 13 + 1),
                c3rnd5: Math.floor(Math.random() * 13 + 1), btn4: "none", btn5: "block", vsb5: "yes",
              }) 
              break;
              case 5: this.setState({
                score: this.state.score + 1, optionRnd5: "Lower", statusRnd5: "WIN", btn5: "none", again: "block",
              }) 
              break;
              default: break;
            }
          } else {
            switch (this.state.count) {
              case 1: this.setState({
                score: this.lose(), optionRnd1: "Lower", statusRnd1: "Lose", c1rnd2: Math.floor(Math.random() * 13 + 1), c2rnd2: Math.floor(Math.random() * 13 + 1),
                c3rnd2: Math.floor(Math.random() * 13 + 1), btn1: "none", btn2: "block", vsb2: "yes",
              }) 
              break;
              case 2: this.setState({
                score: this.lose(), optionRnd2: "Lower", statusRnd2: "Lose", c1rnd3: Math.floor(Math.random() * 13 + 1), c2rnd3: Math.floor(Math.random() * 13 + 1),
                c3rnd3: Math.floor(Math.random() * 13 + 1), btn2: "none", btn3: "block", vsb3: "yes",
              }) 
              break;
              case 3: this.setState({
                score: this.lose(), optionRnd3: "Lower", statusRnd3: "Lose", c1rnd4: Math.floor(Math.random() * 13 + 1), c2rnd4: Math.floor(Math.random() * 13 + 1),
                c3rnd4: Math.floor(Math.random() * 13 + 1), btn3: "none", btn4: "block", vsb4: "yes",
              }) 
              break;
              case 4: this.setState({
                score: this.lose(), optionRnd4: "Lower", statusRnd4: "Lose", c1rnd5: Math.floor(Math.random() * 13 + 1), c2rnd5: Math.floor(Math.random() * 13 + 1),
                c3rnd5: Math.floor(Math.random() * 13 + 1), btn4: "none", btn5: "block", vsb5: "yes",
              }) 
              break;
              case 5: this.setState({
                score: this.lose(), optionRnd5: "Lower", statusRnd5: "Lose", btn5: "none", again: "block",
              }) 
              break;
              default: break;
            }
          }
      } else if (predict === "No Deal") {
        this.noDeal();
      } else {
        this.setState({
          count: this.state.count,
        })
      }
    }
  }

  // Function for initiating round 1 . . .
  round1 = () => {
    this.setState({
      count: 2,
    })

    let card1 = this.state.c1rnd1;
    let card2 = this.state.c2rnd1;
    let card3 = this.state.c3rnd1;
    
    this.option(card1, card2, card3);
  }

  // Function for initiating round 2 . . .
  round2 = () => {
    let card1 = this.state.c1rnd2;
    let card2 = this.state.c2rnd2;
    let card3 = this.state.c3rnd2;

    this.setState({
      count: 3,
    })
    
    this.option(card1, card2, card3);
  }

  // Function for initiating round 3 . . .
  round3 = () => {
    let card1 = this.state.c1rnd3;
    let card2 = this.state.c2rnd3;
    let card3 = this.state.c3rnd3;

    this.setState({
      count: 4,
    })
    
    this.option(card1, card2, card3);
  }

  // Function for initiating round 4 . . .
  round4 = () => {
    let card1 = this.state.c1rnd4;
    let card2 = this.state.c2rnd4;
    let card3 = this.state.c3rnd4;

    this.setState({
      count: 5,
    })
    
    this.option(card1, card2, card3);
  }

  // Function for initiating round 5 . . .
  round5 = () => {
    let card1 = this.state.c1rnd5;
    let card2 = this.state.c2rnd5;
    let card3 = this.state.c3rnd5;

    this.option(card1, card2, card3);
  }

  // Function for refreshing the page to restart the game . . .
  restart = () => {
    window.location.reload(false);
  }

  render() {
    return(
      <>
        <Container>
          <div className = "home-title">
            <h1>Card Game</h1>
            <h2>In Between</h2>
          </div>

          <div className = "game">
            {/* Round 1 */}
            <div className = "round">
              <Round
                rnd = "1" card1 = { this.state.c1rnd1 } card2 = { this.state.c2rnd1 } card3 = { this.state.c3rnd1 }
                option = { this.state.optionRnd1 } status = { this.state.statusRnd1 } visible = { this.state.vsb1 }
              />
              <Button style = {{ display: this.state.btn1 }} onClick = { this.round1 }>PLAY</Button>
            </div>

            {/* Round 2 */}
            <div className = "round">
              <Round
                rnd = "2" card1 = { this.state.c1rnd2 } card2 = { this.state.c2rnd2 } card3 = { this.state.c3rnd2 }
                option = { this.state.optionRnd2 } status = { this.state.statusRnd2 } visible = { this.state.vsb2 }
              />
              <Button style = {{ display: this.state.btn2 }} onClick = { this.round2 }>PLAY</Button>
            </div>

            {/* Round 3 */}
            <div className = "round">
              <Round
                rnd = "3" card1 = { this.state.c1rnd3 } card2 = { this.state.c2rnd3 } card3 = { this.state.c3rnd3 }
                option = { this.state.optionRnd3 } status = { this.state.statusRnd3 } visible = { this.state.vsb3 }
              />
              <Button style = {{ display: this.state.btn3 }} onClick = { this.round3 }>PLAY</Button>
            </div>

            {/* Round 4 */}
            <div className = "round">
              <Round
                rnd = "4" card1 = { this.state.c1rnd4 } card2 = { this.state.c2rnd4 } card3 = { this.state.c3rnd4 }
                option = { this.state.optionRnd4 } status = { this.state.statusRnd4 } visible = { this.state.vsb4 }
              />
              <Button style = {{ display: this.state.btn4 }} onClick = { this.round4 }>PLAY</Button>
            </div>

            {/* Round 5 */}
            <div className = "round">
              <Round
                rnd = "5" card1 = { this.state.c1rnd5 } card2 = { this.state.c2rnd5 } card3 = { this.state.c3rnd5 }
                option = { this.state.optionRnd5 } status = { this.state.statusRnd5 } visible = { this.state.vsb5 }
              />
              <Button style = {{ display: this.state.btn5 }} onClick = { this.round5 }>PLAY</Button>
            </div>
          </div>  

          {/* Displaying the score */}
          <div className = "scores">
            <h3>Total Score: { this.state.score }</h3>
          </div>

          {/* Button for restarting the game */}
          <Button style = {{ display: this.state.again, margin: "0 auto" }} onClick = { this.restart }>AGAIN!</Button>
        </Container>
      </>
    )
  }
}