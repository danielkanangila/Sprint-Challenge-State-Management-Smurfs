import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { addSmurf, resetForm } from "../../store/actions";

const Form = () => {
    const {defaultFormData} = useSelector(state => state.root);
    const [state, setState] = useState(defaultFormData);
    const dispatch = useDispatch();

    useEffect(() => {
        setState(defaultFormData)
    }, [defaultFormData])

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (state.id === undefined) {
            dispatch(addSmurf(state));
        } else {
            console.log(state)
        }
        dispatch(resetForm());
    }
    return(
        <>
            <h2 className="form-title">Add Smurf</h2>
            <StyledForm onSubmit={handleSubmit}>
                <Input onChange={handleChange} type="text" name="name" value={state.name} placeholder="Name" />
                <Input onChange={handleChange} type="text" name="age" value={state.age} placeholder="Age" />
                <Input onChange={handleChange} type="text" name="height" value={state.height} placeholder="Height" />
                <Button type="submit">
                    {state.id !== undefined ? 'Save' : 'Add'}
                </Button>
            </StyledForm>
        </>
    )
}

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    padding: 20px 0;
`

const Button = styled.button`
    background-color: #ccc;
    padding: 15px;
    border-radius: 25px;
    transition: .3s;
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: bold;
    border: 1px solid rgba(0,0,0,0.4);
    &:hover {
        background-color: rgba(0,0,0,0.5);
    }
`

const Input = styled.input`
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 25px;
    transition: .3s;
    &:focus {
        box-shadow: 1px 1px 10px rgba(0,0,0,0.25);
        border: 1px solid transparent;
    }
`; 

export default Form;