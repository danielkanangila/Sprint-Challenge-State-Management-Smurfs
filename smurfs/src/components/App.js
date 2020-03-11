import React, { Component } from "react";
import Smurfs from "./smurfs/Smurfs";
import styled from 'styled-components';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Smurfs />
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  padding: 3rem;
`

export default App;
