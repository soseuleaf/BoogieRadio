import React, { useState } from "react";
import "./App.css";
import styled, { css } from "styled-components";
import Weather from "./components/Weather";


function App() {
    const [cold, setCold] = useState();

    return (
    <Wrapper className="App" cold={cold}>
        <Weather setCold={setCold} />
    </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    width: 100px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: burlywood;
    ${(props) =>
        props.cold &&
        css`
        background-color: skyblue;
    `}
`;