import React, { Component } from "react";
import Smurfs from "./components/smurfs/Smurfs";
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Smurfs />
        </Container>
        <Footer />
      </div>
    );
  }
}

const Container = styled.div`
  padding: 3rem;
`

export default App;
