import React from 'react';
import styled from 'styled-components';

const Smurf = ({name, age, height}) => {
    return(
        <Wrapper>
            <img src={process.env.PUBLIC_URL + '/smurf.jpeg'} alt={name} />
            <div className="text-content">
                <h2>{name}</h2>
                <p>
                    <span className="title">Age:</span>{age} years
                </p>
                <p>
                    <span className="title">Height:</span>{height}
                </p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    box-shadow: 1px 1px 10px rgba(0,0,0,0.25);
    .text-content {
        padding: 0 15px 20px;
    }
    img {
        width: 100%;
    }
    h2 {
        padding: 0.5rem 0;
    }
    p {
        font-size: 0.8rem;
        color: rgba(0,0,0,0.5);
        line-height: 1.5;
        .title {
            padding-right: 10px;
        }
    }
`;

export default Smurf;