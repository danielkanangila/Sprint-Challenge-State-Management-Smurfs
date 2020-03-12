import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { editSmurf, deleteSmurf } from '../../store/actions';

const Smurf = ({name, age, height, id}) => {
    const dispatch = useDispatch();
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
                <div className="action">
                    <button onClick={() => dispatch(editSmurf({name, age, height, id}))}>Edit</button>
                    <button onClick={() => dispatch(deleteSmurf(id))} className="delete">Delete</button>
                </div>
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
    .action {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        button {
            padding: 5px 15px;
            background-color: #ccc;
            transition: .3s;
            border-radius: 25px;
            &:hover {
                background-color: rgba(0,0,0,0.5);
            }
            &.delete {
                background-color: red;
                color: #fff;
                &:hover {
                    background-color: darkred;
                }
            }
        }
    }
`;

export default Smurf;