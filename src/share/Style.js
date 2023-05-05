import styled from "styled-components";
import Select from 'react-select'

export const SelectStyle = styled(Select)`
    width: 200px;
`

export const Input = styled.input`
    width: 200px;
    height: 30px;
    border: 1px solid silver;
    border-radius: 5px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Button = styled.button`
    margin-left: 5px;
    width: 100px;
    height: 33px;
    align-self: flex-end;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: silver;
        transition: all 0.5s;
    }
    &:active {
        color: white;
        background-color: #423d3d;
    }
`