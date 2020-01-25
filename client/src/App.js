import React from 'react';
import PlayerCard from "./components/PlayerCard";
import Navbar from "./components/NavBar";
import "./styles.scss";

class App extends React.Component {

  state = {
    playerdata: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(players => {
        console.log("fetched user data ", players);
        this.setState({
          playerdata: players
        });
      })
      .catch(err => console.log("Unable to fetch player data, error: ", err));
  };



  render() {
    console.log("current state when entering render", this.state);
    return (
      <div data-testid="display-container">
        <Navbar />
        <PlayerCard
          playerdata={this.state.playerdata}
        />
      </div>
    );
  }
}

export default App;
