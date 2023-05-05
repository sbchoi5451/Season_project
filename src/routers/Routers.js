import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Season from '../season/Season'
import Main from '../main/Main'
import styled from 'styled-components'

function Routers() {
    return (
        <Background>
            <Routes>
                <Route path="/" element={<Season />} />
                <Route path="/main" element={<Main />} />
                <Route path="/board" />
                <Route path="/login" />
                <Route path="/signup" />
            </Routes>
        </Background>
    )
}

export default Routers

const Background = styled.div`
box-sizing: border-box;
padding: 100px;
width: 100%;
height: 700px;
display: flex;
align-items: center;
justify-content: center;
`