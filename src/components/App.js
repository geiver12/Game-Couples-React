import React from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import BuildMallet from '../resources/BuildMallet'


const getStates = () => {
  const Mallet = BuildMallet();
  return {
    Mallet,
    SelectCouple: [],
    Compare: false,
    NumberFails: 0
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = getStates();
  }
  render() {
    return (
      <div className="App">
        <Header
          NumberFails={this.state.NumberFails}
          ResetGame={() => this.ResetGame()} />
        <Dashboard
          Mallet={this.state.Mallet}
          SelectCouple={this.state.SelectCouple}
          SelectCard={(Card) => this.SelectCard(Card)}
        />
      </div>
    );
  }
  SelectCard(Card) {
    if (this.state.Compare || this.state.SelectCouple.indexOf(Card) > -1 || Card.lookup) {
      return;
    }
    const SelectCouple = [...this.state.SelectCouple, Card];
    this.setState({ SelectCouple });
    console.log(SelectCouple.length);
    if (SelectCouple.length === 2) {
      this.compareCouples(SelectCouple);
    }
  }
  compareCouples(SelectCouple) {
    this.setState({ Compare: true });

    setTimeout(() => {
      const [firstCard, SecondCard] = SelectCouple;
      let Mallet = this.state.Mallet;
      if (firstCard.icono === SecondCard.icono) {
        Mallet = Mallet.map((card) => {
          if (card.icono !== firstCard.icono) {
            return card;
          }
          return { ...card, lookup: true };

        });
      }
      this.VerifyWinner(Mallet);
      this.setState(
        {
          Mallet,
          SelectCouple: [],
          Compare: false,
          NumberFails: this.state.NumberFails + 1
        })
    }, 1000);
  }

  VerifyWinner(Mallet) {
    
    if (Mallet.filter((card) => !card.lookup).length === 0) {
      alert(`Ganaste en ${this.state.NumberFails} Fails`);
    }
  }
  ResetGame() {
    this.setState( getStates() );
  }

}

export default App;
