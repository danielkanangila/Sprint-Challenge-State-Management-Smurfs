import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getSmurfs } from './../../store/actions';
import Smurf from './Smurf';
import Form from './Form';


const Smurfs = () => {
    const {isFetching, smurfs, errors} = useSelector(state => state.root);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSmurfs());
    },[]);

    return(
        <React.Fragment>
            <Form />
            <Grid>
                {isFetching ? (<h1 className="loading">Loading...</h1>)
                : smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} />)
                }
                {errors ? <p>{errors}</p> : null}
            </Grid>
        </React.Fragment>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
`

export default Smurfs;