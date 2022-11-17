import React,{useState} from "react";
import "./App.css";
import styled, {css} from "styled-components";
import Weather from "./Weather";


function App() {
    const [temp,setTemp]=useState("");
    return (
    <Wrapper className="App" temp={temp}>
        <Weather setTemp={setTemp}/>
    </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    ${(props) =>
    props.cold &&
    css`
        background-color: black;
    `}
`;