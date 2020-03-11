import React from "react";
import styled from 'styled-components';

const NavBar = () => {
    return(
        <Toolbar>
            <h1>Snurfs</h1>
        </Toolbar>
    )
}

const Toolbar = styled.nav`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: fantasy;
    font-size: 2rem;
    height: 85px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.25);
    background-color: #fff;
    h1 {
        padding: 15px 15px;
    }
`

export default NavBar;