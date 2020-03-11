import React, { Component } from "react";
import Smurfs from "./components/smurfs/Smurfs";
import styled from 'styled-components';
import NavBar from './components/NavBar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
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
