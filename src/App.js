import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    advice: " ",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = async () => {
    // await axios.get('https://api.adviceslip.com/advice')
    // .then((response)=> {
    //   const {advice} = response.data.slip;
    //   console.log(advice);
    //   this.setState({advice: advice});
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const { advice } = response.data.slip;
      // console.log(advice);
      this.setState({ advice: advice });
    } catch (error) {
      throw error;
    }
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="glow-on-hover" onClick={this.fetchAdvice}>
            <span>GIVE ME MY ADVICE:)</span>
          </button>
        </div>
      </div>
    );
  }
}
export default App;
