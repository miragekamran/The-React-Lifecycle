import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      doggos: []
    };
  }

  componentDidMount() {
    /* Request the server for data */
    fetch("https://dog.ceo/api/breed/shiba/images")
      .then(res => res.json())
      .then(dogs => this.setState({ doggos: dogs.message.slice(0, 15) }))
      .catch(err => console.error(err));
  }

  render() {
    console.log("In Render", this.state.doggos);
    return (
      <div className="App">
        <h1>Hello Doggos</h1>
        <div className="doggos">
          {this.state.doggos.length > 0 ? (
            this.state.doggos.map((doggo, index) => {
              return <img width="200" src={doggo} key={index} />;
            })
          ) : (
            <h1>Loading.....</h1>
          )}
        </div>
      </div>
    );
  }
}
