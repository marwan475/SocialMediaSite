import React from "react";
import styled  from "styled-components";
import Loading from "../assets/loader.gif"

export default function Welcome({user}){
    return (
        <Container2>
            <div className="welcome">
            <img src={Loading} alt="Loading"/>
            <br></br>
            <h1>
                Welcome, <span>{user}</span>
            </h1>
            <h3>Select a channel for viewing or create your own</h3>
            </div>
        </Container2>
    );
}

const Container2 =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .welcome {
        align-items: center;
        text-align: center;
        
    }
    img {
        height: 20rem;
    }
`;